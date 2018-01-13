import React from 'react';
import { Link } from 'react-router';

const FootBar = (props) => {
    // console.log(props.searchData)
    let searchData=props.searchData?props.searchData:'?dataName=manlist'

   return(
    <footer className="page-footer fixed-footer" id="footer">
    <ul>
        <li>
            <Link to="/home" className="home" activeClassName="home1">
                    <span></span>
                <p>首页</p>
            </Link>
        </li>
        <li>
            <Link to={"/list/"+searchData} className="list" activeClassName="list1" >
                <span></span>
                <p>分类</p>
            </Link>
        </li>
        <li>
            <Link to="/shopcart" className="shopcart" activeClassName="shopcart1">
            <span></span>
                <p>购物车</p>
            </Link>
        </li>
        <li>
            <Link to="/user" className="user" activeClassName="user1">
                 <span></span>
                <p>个人中心</p>
            </Link>
        </li>
    </ul>
</footer>
   )
}

export default FootBar;

