import React from 'react';
import SiteData from './SiteData';
import SiteDetail from './SiteDetail';
import '../css/display.css';

class Display extends React.Component {

    state = { SiteName : this.props.data[0].SiteName };

    onSiteSelect = async(site) => {
        await this.setState({SiteName : site});
        // await console.log(this.state.SiteName);
    }

    getSiteData = (arr, site) => {
        // console.log(Object.values(arr[0]));
        let selectedSiteData = arr.filter(el => Object.values(el)[0] === site);
        if(selectedSiteData.length>0){
            let exportData = selectedSiteData[0];
            return exportData;
        }
        return selectedSiteData;
    };
    
    renderList = () => {
        let SiteDataCard =this.props.data.map(item => {
            return <SiteData onSiteSelect={this.onSiteSelect} key={item.SiteName} SiteName={item.SiteName} AQI={item.AQI} />
        });
        return SiteDataCard;
    }

    render(){
        const {data, region} = this.props;
        if(data.length>0){
            return (
                <div className="displayPage">
                    {/* 顯示地區標題欄 */}
                    <div className="display-title">
                        <div className="title">{region}</div>
                        <div className="divider"></div>
                        <div className="note">{data[0].PublishTime} 更新</div>
                    </div>

                    <div className="display-data">
                        {/* 左邊: 某一監測站詳細資訊欄位 */}
                        <div className="siteDetail">
                            <SiteDetail onSiteSelect={this.onSiteSelect} data={this.getSiteData(data, this.state.SiteName)} SiteName={this.state.SiteName} />
                        </div>

                        {/* 右邊: 地區每一監測站AQI */}
                        <div className="siteList">
                            {this.renderList()}
                        </div>
                    </div>
                </div>            
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }    
}

export default Display;