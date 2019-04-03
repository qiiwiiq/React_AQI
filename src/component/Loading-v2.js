import React from 'react';
import '../css/Loading-v2.css';

const Loading = () => {
    return (
        <div className="loading-page">
            <div className="loading-page-container">
                <i className="fas fa-cloud-sun"></i>
                <div className="cover"></div>
            </div>
        </div>
    );
};

export default Loading;