import React from "react";
import { Link } from 'react-router'

import { connect } from "react-redux";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name: localStorage.getItem('username')
    }
  }
  removeData() {
    localStorage.removeItem('username')
  }
  a(ev){
       console.log(ev.target.value)
  }
  render() {
    let name = this.state.name;
    let a = this.a;
    return (
      <div className="userstyle">
        <div className="p-top  clearfloat">
          <input type="file" id={"checkboxI"} onChange={a} />
          <div className="tu">
            <label htmlFor={"checkboxI"} style={{width:"88px",height:"88px",display:"block"}}>
              <img src="/src/assets/images/self-tou.png" />
            </label>
          </div>
          <Link to="/login"><p className="name" onClick={this.removeData}>{name ? name : "请登录"}</p></Link>
          <div className="p-bottom p-bottom1 clearfloat">
            <ul className="clearfloat">
              <a href="fx-center1.html">
                <li className="box-s">
                  <span className="opa6"></span>
                  <p className="bt">我的佣金</p>
                  <p className="price">0.00</p>
                </li>
              </a>
              <a href="#">
                <li className="box-s">
                  <span className="opa6"></span>
                  <p className="bt">我的积分</p>
                  <p className="price">0</p>
                </li>
              </a>
              <a href="#">
                <li className="box-s">
                  <span className="opa6"></span>
                  <p className="bt">我的足迹</p>
                  <p className="price">0</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="contaniner fixed-contb">
          <section className="self">
            <dl>
              <dt>
                <a href="order.html">
                  <img src="/src/assets/images/self-icon.png" />
                  <b>全部订单</b>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </dt>
              <dd>
                <ul>
                  <li>
                    <a href="ordertwo.html">
                      <img src="/src/assets/images/order-icon01.png" />
                      <p>待发货</p>
                    </a>
                  </li>
                  <li>
                    <a href="orderthree.html">
                      <img src="/src/assets/images/order-icon03.png" />
                      <p>待付款</p>
                    </a>
                  </li>
                  <li>
                    <a href="orderfour.html">
                      <img src="/src/assets/images/order-icon02.png" />
                      <p>待收货</p>
                    </a>
                  </li>
                  <li>
                    <Link to="/goassess">
                      <img src="/src/assets/images/order-icon04.png" />
                      <p>待评价</p>
                    </Link>
                  </li>
                </ul>
              </dd>
            </dl>
            <ul className="self-icon">
              <li>
                <Link to="/datum">
                  <img src="/src/assets/images/self-icon01.png" />
                  <p>个人信息</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </Link>
              </li>
              <li>
                <a href="mycollect.html">
                  <img src="/src/assets/images/self-icon02.png" />
                  <p>我的收藏</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </li>
              <li>
                <a href="balance.html">
                  <img src="/src/assets/images/self-icon012.png" />
                  <p>消费记录</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </li>
              <li>
                <a href="addres.html">
                  <img src="/src/assets/images/self-icon04.png" />
                  <p>地址管理</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </li>
            </ul>
            <ul className="self-icon">
              <li>
                <Link to="/distribution">
                  <img src="/src/assets/images/self-icon05.png" />
                  <p>我的分销</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </Link>
              </li>
              <li>
                <a href="sign.html">
                  <img src="/src/assets/images/self-icon011.png" />
                  <p>修改密码</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/src/assets/images/self-icon013.png" />
                  <p>账号绑定</p>
                  <span><img src="/src/assets/images/right.png" /></span>
                </a>
              </li>
            </ul>
            <Link to="/login"><input type="button" value="退出" onClick={this.removeData} /></Link>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bLoading: state.bLoading
  }
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLoading: () => {
      dispatch({ type: 'SHOW_LOADING' });
    },
    hideLoading: () => {
      dispatch({ type: 'HIDE_LOADING' });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);