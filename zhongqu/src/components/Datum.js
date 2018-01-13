
import React from 'react';

import '../assets/css/article.css'

class Datum extends React.Component {
  render() {
    return (
      <div>
        <header className="top-header">
          <a className="icona" href="javascript:history.go(-1)">
            <img src="/src/assets/images/left.png" />
          </a>
          <h3>我的资料</h3>
          <a className="iconb" href="shopcar.html">
          </a>
        </header>

        <div className="contaniner">
          <ul className="self-data">
            <li>
              <a href="#">
                <p>头像</p>
                <span><img src="/src/assets/images/right.png" /></span>
                <figure><img src="/src/assets/images/detail-tou.png" /></figure>
              </a>
            </li>
            <li>
              <a href="namechange.html">
                <p>昵称</p>
                <span><img src="/src/assets/images/right.png" /></span>
                <small>瑾晨</small>

              </a>
            </li>
            <li>
              <a href="#">
                <p>性别</p>
                <span><img src="/src/assets/images/right.png" /></span>
                <small>男</small>

              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Datum