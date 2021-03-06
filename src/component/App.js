import React from 'react';
import axios from 'axios';
// import { key, proxy } from './config';
import SearchBar from './SearchBar';
import AQIindex from './AQIindex';
import Display from './Display';
import Footer from './Footer';
import Loading from './Loading-v2';
import '../css/App.css';


class App extends React.Component{
    state = { data: [], region: '', selectedSite: '' };

    componentDidMount(){
        // 撈AQI資料
        const getData = async () => {
            try{
                const response = await axios.get(`https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`);
                this.setState({ 
                    data: response.data.records,
                    region: '臺北市'
                });
                let sitedata = this.regionData(this.state.data, this.state.region)[0];
                let defaultSite = this.getDefaultSite(sitedata);
                this.setState({selectedSite: defaultSite});
                console.log('ok');

            } catch (err) {
                alert('An Error occurred, please refresh the page and try again.');
            }
        };
        getData();
        setInterval(getData, 1800000); // 半小時更新一次
    }

    // 選擇地區(region)以及把此地區第一個觀測站(selectedSite)存到state
    onRegionSubmit = (region, data=this.state.data) => {
        this.setState({region: region});
        let sitedata = this.regionData(data, region)[0];
        let defaultSite = this.getDefaultSite(sitedata);
        this.setState({selectedSite: defaultSite});
    };
    
    // 點選某觀測站(selectedSite)時更新state
    onSiteSelect = (site) => {
        this.setState({selectedSite : site});
    }

    // 得到選取地區的第一觀測站名稱
    getDefaultSite = (regionDataArr) => {
        let objectValues = Object.values(regionDataArr);
        let defaultSiteName = objectValues[0];
        return defaultSiteName;
    }

    // 取出地區資料
    regionData = (data, region) => {
        let regionData = data.filter(item => item.County === region);
        return regionData;
    };

    render(){
        const { data, region, selectedSite } = this.state;
        
        if(data.length>0){
            return (
                <div>
                    <div className="page">
                        <div className="row">
                            <SearchBar submit={this.onRegionSubmit}/>
                            <AQIindex/>
                        </div>
                        <div className="section-display">
                            <Display 
                                data={this.regionData(data, region)} 
                                region={region} 
                                onSiteSelect={this.onSiteSelect} 
                                SiteName={selectedSite}
                            />
                            <AQIindex/>
                        </div>
                    </div>
                    <div className="section-footer">
                        <Footer/>
                    </div>
                </div>
            );
        } else {
            return <Loading />;
        }
    }
}

export default App;
