//index.js |jsx == 主入口文件
import React from 'react';
import ReactDom from 'react-dom';
import FootBar from './FootBar'
import NavBar from './NavBar'
import Loading from './Loading'

import { connect } from 'react-redux';

import Home from './Home'

//创建组件  创建一个类继承到React.Component类
class App extends React.Component {
  render() {
    //解构状态管理传过来的props
    let { bNav, bFoot, hideNav, hideFoot, showcomment,showinformation,
      hidecomment,hideinformation,showNav, showFoot,bLoading,showLoading,hideLoading } = this.props;
      //this.props是router带的
    let path = this.props.location.pathname;
    if (/home/.test(path)) {
      setTimeout(showNav, 0);
      setTimeout(showFoot, 0);
    }
    if (/list|detail|shopcart|user|login|reg|assess|datum|gobuy/.test(path)) {
      setTimeout(hideNav, 0);
    }
    if (/login|reg|detail|assess|datum|gobuy/.test(path)) {
      setTimeout(hideFoot, 0);
    }
    if (/list|user|shopcart/.test(path)) {
      setTimeout(showFoot, 0);
    }
    if (/information/.test(path)) {
      setTimeout(showinformation, 0);
      setTimeout(hidecomment, 0);

    }
    if (/comment/.test(path)) {
      setTimeout(showcomment, 0);
      setTimeout(hideinformation, 0);
    }
    
    // console.log(this.props.location.search)
    let searchData=this.props.location.search

    return (
      <div className="app">
        {bLoading ? <Loading /> : undefined}
        {bNav ? <NavBar /> : undefined}
        {this.props.children}
        {bFoot ? <FootBar searchData={searchData} /> : undefined}
      </div>
    );
  }
}

//状态satte来的属性都在mapStateToProps里面
const mapStateToProps = (state, ownProps) => {
  return {
    bNav: state.bNav,
    bFoot: state.bFoot,
    bLoading: state.bLoading,
    bIformation:state.bIformation,
    bComment:state.bComment

  }
}

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLoading: () => {
      dispatch({ type: 'SHOW_LOADING' });
    },
    hideLoading: () => {
      dispatch({ type: 'HIDE_LOADING' });
    },
    showNav: () => {
      dispatch({ type: 'SHOW_NAV' });
    },
    hideNav: () => {
      dispatch({ type: 'HIDE_NAV' });
    },
    showFoot: () => {
      dispatch({ type: 'SHOW_FOOT' });
    },
    hideFoot: () => {
      dispatch({ type: 'HIDE_FOOT' })
    },
    showinformation: () => {
      dispatch({ type: 'SHOW_INFOMATION' });
    },
    hideinformation: () => {
      dispatch({ type: 'HIDE_INFOMATION' });
    },
    showcomment: () => {
      dispatch({ type: 'SHOW_COMMENT' });
    },
    hidecomment: () => {
      dispatch({ type: 'HIDE_COMMENT' });
    },

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)