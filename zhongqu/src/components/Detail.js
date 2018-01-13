import React from "react";
import { Link } from 'react-router'
import { connect } from "react-redux";
import Comment from './Comment'
import Information from './Information'

import '../assets/css/swiper3.07.min.css'
import '../assets/js/swiper.min.js'

import $ from 'jquery';
import '../assets/css/article.css'


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      banData: [],
      comData:[]
    }
  }
  componentDidMount() {
    $(function () {
      $('.chose li').click(function () {
        $(this).addClass('chose-active').siblings().removeClass('chose-active');
        var tags = document.getElementsByClassName('chose-active');//获取标签
        var tagArr = "";
        for (var i = 0; i < tags.length; i++) {
          tagArr += tags[i].innerHTML;//保存满足条件的元素
        }
        $('#sss').html(tagArr);
      });
    });

    this.getData();
  }
  /* 要等数据更新完才能抓取到元素 */
  componentDidUpdate() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 1000,
      autoplay: 1000,
      visibilityFullFit: true,
      pagination: '.swiper-pagination',
    });
  }
  getData() {
    this.props.showLoading();
    let str = this.props.location.query.dataName;
    let url = `../data/${str}.json`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setTimeout(() => {
          this.props.hideLoading();
          this.setState({
            listData: data[this.props.params.id - 1],
            banData: data[this.props.params.id - 1].imgArr,
            comData: data[this.props.params.id - 1].comment
          })
        }, 300);
      }
      )
  }

  render() {
    let gobackpath = this.props.location.search;
    let { toBaycar, bIformation,bComment } = this.props;
    let listData = this.state.listData;
    let banData = this.state.banData;
    let comData = this.state.comData;
    return (
      <div className="detailstyle">
        <header className="detail-header fixed-header">
          <a href="javascript:;" onClick={()=>{this.props.router.go(-1)}}>
            <img src="/src/assets/images/detail-left.png" />
          </a>
          <Link className="right" to="/shopcart">
            <img src="/src/assets/images/shopbar.png" />
          </Link>
        </header>
        <div className="contaniner fixed-contb">
          <section className="detail">
            {/* 轮播 */}
            <figure className="swiper-container">
              <ul className="swiper-wrapper">
                {
                  banData.map((item, index) => {
                    return (
                      <li className="swiper-slide" key={index}>
                        <a href="javascript:;">
                          <img src={item} />
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="swiper-pagination">
              </div>
            </figure>
            <dl className="jiage">
              <dt>
                <h3>{listData.title}</h3>
                <div className="collect">
                  <img src="/src/assets/images/detail-heart-hei.png" />
                  <p>收藏</p>
                </div>
              </dt>
              <dd>
                <b>￥{listData.price}</b>
                <del>￥{listData.delPrice}</del>
                <input type="button" value="￥10.00" />
                <small>+356积分</small>
              </dd>
            </dl>
            < div className="chose">
              <ul>
                <h3>颜色</h3>
                <li><a href="javascript:;">黑色</a></li>
                <li><a href="javascript:;">粉色</a></li>
                <li><a href="javascript:;">灰色</a></li>
                <li><a href="javascript:;">红色</a></li>
              </ul>
              <ul>
                <h3>尺寸</h3>
                <li><a href="javascript:;">L</a></li>
                <li><a href="javascript:;">XL</a></li>
                <li><a href="javascript:;">XXL</a></li>
              </ul>
            </div>
            <a href="#" className="seven">
              <b>7</b>天无理由退换货
				      <span id="sss"></span>
            </a>
            <ul className="same">
              <a href="#">
                <span>
                  同类推荐
					        </span>
                <li className="one">
                  <img src="/src/assets/images/detail-pp01.png" />
                  <p>￥188.00</p>
                </li>
                <li>
                  <img src="/src/assets/images/detail-pp02.png" />
                  <p>￥188.00</p>
                </li>
                <li>
                  <img src="/src/assets/images/detail-pp03.png" />
                  <p>￥188.00</p>
                </li>
                <li>
                  <img src="/src/assets/images/detail-pp04.png" />
                  <p>￥188.00</p>
                </li>
              </a>
            </ul>
            {/* 评论 */}
            <article className="detail-article">
              <nav>
                <ul className="article">
                  <li>
                  <Link to="/detail/information" className={bIformation?"article-active":undefined}  href="javascript:;" id="talkbox1" >商品详情</Link>
                  </li>
                  <li>
                  <Link to="/detail/comment"  className={bComment?"article-active":undefined} href="javascript:;" id="talkbox2" >评价</Link>
                  </li>
                </ul>
              </nav>
              {bIformation?<Information banData={banData}/> :undefined}
              {bComment?<Comment comData={comData} />:undefined}
            </article>

          </section>
        </div>
        <footer className="detail-footer fixed-footer">
          <Link to="/shopcart" className="go-car">
            <input type="button" onClick={this.addDetailData.bind(this, listData)} value="加入购物车" />
          </Link>
          <a href="javascript:;" className="buy">立即购买</a>
        </footer>
      </div >
    )
  }
  addDetailData(data) {
    this.props.toBaycar(data);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bLoading: state.bLoading,
    bycar: state.baycar,
    bIformation:state.bInformation,
    bComment:state.bComment
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
    },
    toBaycar: (data) => {
      dispatch({ type: 'TO_BUYCART', payload: data });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);