import React from 'react';
import SiteData from './SiteData';
import '../css/siteDetail.css';

const SiteDetail = ({onSiteSelect, data, SiteName}) => {
        
        return (
            <div className="siteDetail-page">
                <div className="siteDetail-card">
                    <SiteData onSiteSelect={onSiteSelect} SiteName={SiteName} AQI={data.AQI}/> 
                </div>
                
                <div className="outer-container">
                    <div className="innerContainer">
                        <div className="item bt-border">
                            <div>臭氧 <span>O<sub>3</sub> (ppb)</span></div>
                            <div>{data.O3}</div>
                        </div>
                        <div className="item bt-border">
                            <div>懸浮微粒 <span>PM<sub>10</sub> (μg/m<sup>3</sup>)</span></div>
                            <div>{data.PM10}</div>
                        </div>
                        <div className="item bt-border">
                            <div>細懸浮微粒 <span>PM<sub>2.5</sub> (μg/m<sup>3</sup>)</span></div>
                            <div>{Object.values(data)[11]}</div>
                        </div>
                        <div className="item bt-border">
                            <div>一氧化碳 <span>CO (ppm)</span></div>
                            <div>{data.CO}</div> 
                        </div>
                        <div className="item bt-border">
                            <div>二氧化硫 <span>SO<sub>2</sub> (ppb)</span></div>
                            <div>{data.SO2}</div>
                        </div>
                        <div className="item">
                            <div>二氧化氮 <span>NO<sub>2</sub> (ppb)</span></div>
                            <div>{data.NO2}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default SiteDetail;