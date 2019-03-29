import React from 'react';
import '../css/AQIindex.css';

class AQIindex extends React.Component {
    render(){
        return (
            <div class="index">
                <table className="table1">
                <tbody>
                    <tr id="grade">
                        <td>0~50</td>
                        <td>51~100</td>
                        <td>101~150</td>
                        <td>151~200</td>
                        <td>201~300</td>
                        <td>301~400</td>
                    </tr>
                    <tr>
                        <td>良好</td>
                        <td>普通</td>
                        <td>對敏感族群<br/>不健康</td>
                        <td>對所有族群<br/>不健康</td>
                        <td>非常不健康</td>
                        <td>危害</td>
                    </tr>
                </tbody>
                </table>
                <div className="table2Display">
                    <div className="table2">
                        <div>良好</div>
                        <div>普通</div>
                        <div>對敏感族群不健康</div>
                        <div>對所有族群不健康</div>
                        <div>非常不健康</div>                   
                        <div>危害</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AQIindex;