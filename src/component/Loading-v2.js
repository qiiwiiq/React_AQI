import React from 'react';
import '../css/Loading-v2.css';
import '../css/icon-font.css';

const Loading = () => {
    return (
        <div className="loading-page">
            <div className="loading-page-container">
                <i className="icon-weather-wind-sun"></i>
                <div className="cover"></div>
            </div>
        </div>
    );
};

export default Loading;