
import React from 'react';

import '../assets/css/article.css'

class Distribution extends React.Component {
  render() {
    return (
      <div>
        <header className="top-header">
          <a className="icona" href="javascript:history.go(-1)">
            <img src="/src/assets/images/left.png" />
          </a>
          <h3>购买成为分销商</h3>
          <a className="iconb" href="shopcar.html">
          </a>
        </header>

        <div className="login">
          <form>
            <div className="buybanner clearfloat">
              <img src="/src/assets/images/fxbanner.jpg" />
            </div>
            <a href="fx-center.html" className="gobuy-btn">
              立即购买成为分销商
			</a>
          </form>
        </div>
      </div>
    )
  }
}
export default Distribution