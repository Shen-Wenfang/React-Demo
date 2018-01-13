import React, { Component } from 'react';
import { Link } from 'react-router'

import { connect } from "react-redux";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: []
		}
	}
	componentDidMount() {
		this.getData();
	}
	getData() {
		this.props.showLoading();
		let str = this.props.location.query.dataName;
		let url=`http://localhost:3000/${str}`
		// let url = `../data/${str}.json`;
		fetch(url).then(
			res => res.json()
		).then(
			data => {
				setTimeout(() => {
					this.props.hideLoading();
					this.setState({ listData: data });
					// console.log(data)
				}, 200);
			}
			)
	}
	render() {
		let list = this.state.listData;
		let str = this.props.location.query.dataName;
		let gobackpath = this.props.location.search

		return (
			<div className="listBox">
				<header className="top-header fixed-header">
					<Link className="icona" to={"/home"+gobackpath}>
						<img src="/src/assets/images/left.png" />
					</Link>
					<h3>服装专区</h3>
					<Link className="iconb" to="/shopcart">
						<img src="/src/assets/images/shopbar.png" />
					</Link>
				</header>
				<div className="contaniner fixed-conta">
					<section className="list">
						<figure><img src="/src/assets/images/list-ban01.png" /></figure>
						<div className="search">
							<input type="search" placeholder="韩版卫衣" />
							<label><img src="/src/assets/images/list-search.png" /></label>
						</div>
						<nav>
							<ul>
								<li>
									<a href="#">
										<span>全部</span>
									</a>
								</li>
								<li className="list-active">
									<a href="#">
										<span>销量</span>
										<img src="/src/assets/images/up-red.png" />
									</a>
								</li>
								<li>
									<a href="#">
										<span>价格</span>
									</a>
								</li>
								<li>
									<Link to="/assess">
										<span>评价</span>
									</Link>
								</li>
							</ul>
						</nav>
						<ul className="wall">
							{
								list.map((item, index) => {
									return (
										<li className="pic" key={item.id}>
											<Link to={{ pathname: '/detail/' + item.id, query: { dataName: str } }}>
												<img src={item.imgUrl} />
												<p>{item.title}</p>
												<b>￥{item.price}</b><del>￥{item.delPrice}</del>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</section>
				</div>
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
)(List);
