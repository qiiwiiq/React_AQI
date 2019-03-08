import React from 'react';
import '../css/searchBar.css';

class SearchBar extends React.Component {

    state = { region: '' };

    // 選擇地區更新state，藉由callback function傳遞參數
    onRegionChange = async(e) => this.props.submit(e.target.value);

    render(){
        return (
            <div className="searchBar">
                <p className="searchBar_title">空氣品質指標 <span>(AQI)</span></p>
                <select onChange={this.onRegionChange}>
                    <option value=" ">請選擇地區</option>
                    <option value="基隆市">基隆市</option>
                    <option value="臺北市">臺北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="臺中市">臺中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="臺南市">臺南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="臺東縣">臺東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
                </select>
            </div>
        );
    };
}

export default SearchBar;