import React from 'react';
import SiteData from './SiteData';
import SiteDetail from './SiteDetail';
import '../css/display.css';

class Display extends React.Component {

    constructor(props){
        super(props);
        this.cardRef = React.createRef();
        this.detailRef = React.createRef();
    }

    componentDidMount(){
        this.toggle();
        window.addEventListener('resize', this.toggle);
    }

    // device顯示寬度小於600時，點選地區AQI切換顯示隱藏詳細資料欄
    toggle = () => {
        if(window.innerWidth<=600){
            this.detailRef.current.style.setProperty('display', 'none');
            this.cardRef.current.addEventListener('click', ()=>{
                this.detailRef.current.style.setProperty('display', 'block');
            });

            this.detailRef.current.addEventListener('click', ()=>{
                this.detailRef.current.style.setProperty('display', 'none');
            });
        } else {
            this.detailRef.current.style.setProperty('display', 'block');
        }
    };

    // 得到觀測站的資料物件
    getSiteData = (arr, site) => {
        let selectedSiteData = arr.filter(el => Object.values(el)[0] === site);
        if(selectedSiteData.length>0){
            let exportData = selectedSiteData[0];
            return exportData;
        }
        return selectedSiteData;
    };
    
    // 每一觀測站AQI
    renderList = () => {
        let SiteDataCard =this.props.data.map(item => {
            return <SiteData onSiteSelect={this.props.onSiteSelect} key={item.SiteName} SiteName={item.SiteName} AQI={item.AQI} />
        });
        return SiteDataCard;
    }

    render(){
        const {data, region, onSiteSelect, SiteName} = this.props;
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
                        {/* 左邊: 點選之觀測站詳細資訊欄位 */}
                        <div className="siteDetail" ref={this.detailRef}>
                            <SiteDetail 
                                onSiteSelect={onSiteSelect} 
                                data={this.getSiteData(data, SiteName)} 
                                SiteName={SiteName} 
                            />
                        </div>

                        {/* 右邊: 地區每一監測站AQI */}
                        <div className="siteList" ref={this.cardRef}>
                            {this.renderList()}
                        </div>
                    </div>
                </div>            
            );
        } else {
            return (
                <div>Please select a region</div>
            );
        }
    }    
}

export default Display;