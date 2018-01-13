//index.js |jsx == 主入口文件
import React from 'react';
import { Link } from 'react-router';
import '../assets/css/article.css'

class Goassess extends React.Component {
  render() {
    return (
      <div>
        <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="/src/assets/images/left.png"/>
			</a>
		<h3>待发货</h3>
			<a className="iconb" href="shopcar.html">
			</a>
	</header>
	<div className="contaniner fixed-cont">
		<section className="go-order">
			<h3>
				<img src="/src/assets/images/b-iocn02.png"/>
				<span>待评价</span>
			</h3>
			<dl className="map">
				<dt><img src="/src/assets/images/a-icon02.png"/></dt>
				<dd>
					<span>瑾晨</span>
					<small>13035059860</small>
					<p>安徽省合肥市XXXXXXXX</p>
				</dd>
			</dl>
			<div className="order-shop">
				<dl>
					<a href="detail.html">
						<dt><img src="/src/assets/images/index-ph01.png"/></dt>
						<dd>
							<p>超级大品牌服装，现在够买只要998</p>
							<small>颜色：经典绮丽款</small>
							<span>尺寸：L</span>
							<input type="button" value="退货/退款" />
							<b>￥32.00</b>
							<strong>×3</strong>
						</dd>
					</a>
					
				</dl>
				<ul>
					<li>
						<span>运费</span>
						<small>包邮</small>
					</li>
					<li>
						<span>商品总额</span>
						<small>￥98.00</small>
					</li>
					<li>
						<p>
							下单时间：2015-1125 22:04:41<br />订单编号：214484605204859
						</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
	<footer className="order-footer fixed-footer">
		<Link to="/assess"><input type="submit" value="去评价" /></Link>
	</footer>
      </div>
    )
  }
}
export default Goassess