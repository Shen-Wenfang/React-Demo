import React from 'react';
import {Link} from 'react-router';


const NavBar = () => (
    <header className="mui-bar mui-bar-nav" id="header">
        <div className="top-sch-box flex-col">
            <div className="centerflex">
                <a href="javascript:;">
                    <img src="/src/assets/img/icon/search.png" alt="" />
                </a>
                <input className="sch-txt" placeholder="连衣裙就是你的女人味儿"/>
                <span className="shaomiao">
                    <i className="iconfont icon-saoma"></i>
                </span>
            </div>
        </div>
        <a className="btn" href="javascript:;">
            <img src="/src/assets/img/icon/ling.png" style={{margin:'0.3rem 0 0 0'}} />
        </a>
        <Link to="/shopcart" className="btn">
        <img src="/src/assets/img/icon/shopcar.png" style={{margin:'0.3rem 0.2rem 0 0'}} />
        </Link>
    </header>
)

export default NavBar;

