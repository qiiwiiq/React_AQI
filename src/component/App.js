import React from 'react';
import axios from 'axios';
import { key, proxy } from './config';
import SearchBar from './SearchBar';
import AQIindex from './AQIindex';
import Display from './Display';
import Footer from './Footer';
import '../css/App.css';


class App extends React.Component{
    state = { data: [], region: '新北市', selectedSite: null };

    regionData = (data, region) => {
        let regionData = data.filter(item => Object.values(item)[1] === region);
        return regionData;
    };
    
    onRegionSubmit = (country) => {
        this.setState({region: country});
    };

    componentWillMount(){
        const getData = async () => {
            try{
                const response = await axios.get(`${proxy}https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259/?format=json&limit=100&token=${key}`);
                this.setState({ data: response.data.result.records});
                console.log('ok');

            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }

    render(){
        const { data, region } = this.state;
        if(data.length>0){
            return (
                <div className="page">
                    <div className="row">
                        <SearchBar submit={this.onRegionSubmit}/>
                        <AQIindex/>
                    </div>
                    <div className="section-display">
                        <Display data={this.regionData(data, region)} region={region} />
                    </div>
                    <div className="section-footer">
                        <Footer/>
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

export default App;
