import React from 'react';
import '../css/Loading.css';

const Loading = () => {
    return (
        <div className="loading-page">
            <div className="loading-page-container">
                <div className="img-container"><img src="https://upload.cc/i1/2019/03/10/BFuA8J.png" alt="windy"></img></div>
                <div className="text">Loading.....</div>
            </div>
        </div>
    );
};

export default Loading;