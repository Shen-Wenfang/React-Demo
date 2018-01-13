import React, { Component } from 'react';
import { Link } from 'react-router';

import Slider from './Slider'

import { connect } from "react-redux";

class Home extends Component {

    componentDidMount() {
        this.props.router.replace('/home');
        // this.props.showLoading();
    }
    render() {
        return (
            <div id="main" className="mui-clearfix" style={{ margin: '1.4rem 0 0.2rem 0' }}>
                <div className="mui-content">
                    {/* <!-- 轮播图 --> */}

                    <Slider />

                    {/* <!-- 明星同款图片 --> */}
                    <div className="home-nav ui-box">
                        <div className="ui-flex flex-justify-sb">
                            <div>
                                <a href="">
                                    <img src="/src/assets/img/homenav1.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="/src/assets/img/homenav2.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="/src/assets/img/homenav3.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="/src/assets/img/homenav4.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home-qnav ui-box">
                        <div className="ui-flex flex-justify-sb">
                            <div>
                                <a href="javascript:;">
                                    <img src="/src/assets/img/qnav1.png" className="ico" />
                                    <span className="name">我的店铺</span>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:;">
                                    <img src="/src/assets/img/qnav2.png" className="ico" />
                                    <span className="name">招商加盟</span>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:;">
                                    <img src="/src/assets/img/qnav3.png" className="ico" />
                                    <span className="name">我的喜欢</span>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:;">
                                    <img src="/src/assets/img/qnav4.png" className="ico" />
                                    <span className="name">猜你喜欢</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home-newgoods ui-box">
                        <img className="home-imgtit" src="/src/assets/img/hometit1.jpg" alt="" />
                        <div className="list-type1 plist-puzzle">
                            <a className="b" href="">
                                <img src="/src/assets/uploads/t1.jpg" />
                            </a>
                            <div className="s ui-flex-vt flex-justify-sb">
                                <a className="box" href="">
                                    <img src="/src/assets/uploads/t2.jpg" />
                                </a>
                                <a className="box" href="">
                                    <img src="/src/assets/uploads/t2.jpg" />
                                </a>
                                <a className="box" href="">
                                    <img src="/src/assets/uploads/t2.jpg" />
                                </a>
                            </div>
                        </div>
                        <img className="home-imgtit" src="/src/assets/img/hometit2.jpg" alt="" />
                        <div className="list-type2 ui-flex flex-justify-sb">
                            <a className="box" href="">
                                <img className="figure" style={{ width: '0.44.rem' }} src="/src/assets/uploads/t3.jpg" alt="" />
                                <span className="tit">情侣穿搭</span>
                            </a>
                            <a className="box" href="">
                                <img className="figure" src="/src/assets/uploads/t3.jpg" style={{ width: '0.44.rem' }} alt="" />
                                <span className="tit">约会美搭</span>
                            </a>
                            <a className="box" href="">
                                <img className="figure" src="/src/assets/uploads/t3.jpg" style={{ width: '0.44.rem' }} alt="" />
                                <span className="tit">全部新款</span>
                            </a>
                        </div>
                    </div>
                    <div className="home-fashion ui-box ui-border-t">
                        <img className="home-imgtit" src="/src/assets/img/hometit3.jpg" alt="" />
                        <a href="">
                            <img className="db margin-b-s" src="/src/assets/uploads/t4.jpg" width="100%" alt="" />
                        </a>
                        <div className="contaniner fixed-contb">
                            <section className="shop">
                                <h3>
                                    <a href="#">
                                        服装
									<span>
                                            <img src="/src/assets/images/right.png" />
                                        </span>
                                    </a>
                                </h3>
                                <dl>
                                    <dd>
                                        <Link to={{ pathname: '/list/', query: { dataName: 'manlist' } }}>
                                            <img src="/src/assets/images/index-ph01.png" />
                                            <b>男装</b>
                                        </Link>
                                    </dd>
                                    <dd>
                                        <Link to={{ pathname: '/list/', query: { dataName: 'womenlist' } }}>
                                            <img src="/src/assets/images/index-ph02.png" />
                                            <b>女装</b>
                                        </Link>
                                    </dd>
                                </dl>
                            </section>
                            <section className="shop">
                                <h3>
                                    <a href="list.html">
                                        食品
									    <span>
                                            <img src="/src/assets/images/right.png" />
                                        </span>
                                    </a>
                                </h3>
                                <dl>
                                    <dd>
                                        <Link to={{ pathname: '/list/', query: { dataName: 'manlist' } }}>
                                            <img src="/src/assets/images/index-03.png" />
                                            <b>切糕</b>
                                        </Link>

                                    </dd>
                                    <dd>
                                        <Link to={{ pathname: '/list/', query: { dataName: 'womenlist' } }}>
                                            <img src="/src/assets/images/index-ph04.png" />
                                            <b>酥饼</b>
                                        </Link>
                                    </dd>
                                </dl>
                            </section>
                        </div>
                    </div>
                </div>
                {/* <!--mui-content end--> */}
            </div>

        )
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
)(Home);