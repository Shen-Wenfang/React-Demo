import React from "react";
import { connect } from "react-redux";

class Shopcart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartmsg: [],
      textnum:''
    }
    this.clearbuycart=this.clearbuycart.bind(this)
    this.changetext=this.changetext.bind(this)
  }
  changetext(ev){
      this.setState({
        textnum:ev.target.value
      })
  }
  render() {
    let cartmsg = this.state.cartmsg;
    // console.log(cartmsg)
    return (
      <div className="shopcart">
        <header className="page-header">
          <a className="goback">
            <img src="/src/assets/images/left.png" onClick={() => { this.props.router.go(-1) }} />
          </a>
          <h3>购物车</h3>
        </header>
        <div className="contaniner away">
          <div className="clearcart">
            <input type="checkbox" className="all-checkbox" />
            <span>全选</span>
            <input type="button" value="清空购物车" onClick={this.clearbuycart} className="clear" />
          </div>
          {
            cartmsg.map((item, index) => {
              return (
                <section className="shopcar" key={item.id}>
                  <div className="shopcar-checkbox">
                    <input type="checkbox" className="shopcar-box" />
                  </div>
                  <div>
                    <figure><img src={item.imgUrl} /></figure>
                    <dl>
                      <dt>{item.title}</dt>
                      {/* <dd>颜色：经典绮丽款</dd>
                      <dd>尺寸：L</dd> */}
                      <dd>单价：<span className="price">￥{item.price}.00</span></dd>
                      <dd>小计：<span className="sum">￥{item.price*item.num}.00</span></dd>
                      <div className="add">
                        <span onClick={this.changeNum.bind(this, { id: item.id, num: -1 })}>-</span>
                        {/* 计算 */}
                        <input type="text" value={item.num} onChange={this.changetext} />
                        <span onClick={this.changeNum.bind(this, { id: item.id, num: 1 })}>+</span>
                      </div>
                      
                      <small><img onClick={this.delbuycart.bind(this, item.id)} src="/src/assets/images/shopcar-icon01.png" /></small>
                    </dl>
                  </div>
                </section>
              )
            })
          }
          {/* <!--去结算--> */}
          <div style={{ marginBottom: '16%' }}></div>
        </div>
        <footer className="page-footer fixed-footer">
          {
            cartmsg.map((item,index)=>{
                return(
                  <div className="shop-go" key={index}>
                  <b>合计：￥{item.price*item.num}</b>
                  <span><a href="buy.html">去结算（2）</a></span>
                  </div>
                )
            })
          }
        </footer>
      </div>
    );
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    var { carlist } = this.props;
    this.setState({
      cartmsg: carlist
    })
  }
  changeNum(data) {
    this.props.changeNum(data);
    var { carlist } = this.props;
      this.setState({
        cartmsg: carlist
      })
  }
  clearbuycart(data) {
    this.props.clearbuycart(data);
    var { carlist } = this.props;
    this.setState({
      cartmsg:[]
    })
  }
  delbuycart(data) {
    this.props.delbuycart(data);
    var { carlist } = this.props;
    this.setState({
      cartmsg: carlist
    })
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    carlist: state.buycart
  }
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeNum: (data) => {
      dispatch({ type: "CHANGE_NUM", payload: data })
    },
    clearbuycart: (data) => {
      dispatch({ type: "CLEAR_BUYCART", payload: data })
    },
    delbuycart: (data) => {
      dispatch({ type: "DEL_BUYCART", payload: data })
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopcart);