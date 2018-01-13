//index.js |jsx == 主入口文件
import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect } from 'react-router';

import App from './components/App'
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Shopcart from './components/Shopcart';
import Login from './components/Login';
import Reg from './components/Reg';
import User from './components/User';
import Error from './components/Error'
import Assess from './components/Assess'
import Goassess from './components/Goassess'
import Datum from './components/Datum'
import Information from './components/Information'
import Comment from './components/Comment'
import Distribution from './components/Distribution'

const RouterConfig = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="list" component={List}>
                <Route path=":id" component={List} />
            </Route>
            <Route path="assess" component={Assess} />
            <Route path="goassess" component={Goassess} />
            <Route path="datum" component={Datum} />
            <Route path="distribution" component={Distribution} />
            <Route path="detail" component={Detail}>
                <Route path="information" component={Information}/>
                <Route path="comment" component={Comment}/>
                <Route path=":id" component={Detail} />
            </Route>
            <Route path="shopcart" component={Shopcart}>
                <Route path=":id" component={Shopcart} />
            </Route>
            <Route path="user" component={User} />
            <Route path="login" component={Login} />
            <Route path="reg" component={Reg} />
            <Route path="*" component={Error} />
        </Route>
    </Router>
)






export default RouterConfig