import React from 'react';
import '../css/siteData.css'

// AQI 背景顏色判斷
const AQIColorIndex = (AQI) => {
    if(AQI === ""){
        return '#747d8c';
    } else {
        const AQInum = Number(AQI);
        if (AQInum <= 50){
            return '#95F084';
        } else if (AQInum > 50 && AQInum <= 100){
            return '#FFE695';
        } else if (AQInum > 100 && AQInum <= 150){
            return '#FFAF6A';
        } else if (AQInum > 150 && AQInum <= 200){
            return '#FF5757';
        } else if (AQInum > 200 && AQInum <= 300){
            return '#9777FF';
        } else if (AQInum > 300 && AQInum <= 400){
            return '#AD1774';
        } else {
            return '#000';
        }
    }
};

const SiteData = ({onSiteSelect, SiteName, AQI}) => {
    const bgColor = AQIColorIndex(AQI);
    return (
        <div className="card" onClick={() => onSiteSelect(SiteName)} >
            <div className="siteName">{SiteName}</div>
            <div style={{backgroundColor: bgColor}} className="AQI">{AQI}</div>
        </div>
    );
};

export default SiteData;
