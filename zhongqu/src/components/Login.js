import React from "react";
import { Link, hashHistory } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    },
      this.changename = this.changename.bind(this);
    this.changepsd = this.changepsd.bind(this);
    this.login = this.login.bind(this);
  }

  changename(ev) {
    this.setState({ username: ev.target.value })
  }
  changepsd(ev) {
    this.setState({ password: ev.target.value })
  }
  login() {
    var params = new URLSearchParams();
    params.append("username", this.state.username);
    params.append("password", this.state.password);
    localStorage.setItem('username', this.state.username);
    fetch("http://localhost:3000/user/login", {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    }).then(
      res => res.json()
      ).then(
      data => {
        if (data.error == 0) {
          this.props.router.push("/user");
          localStorage.setItem('username', this.state.username);
          this.setState({
            username: '',
            password: ''
          })
        }
        if (data.error == 1) {
          alert(data.msg);
          this.setState({
            username: '',
            password: ''
          })
        }
        if (data.error == 2) {
          alert(data.msg)
        }
      })
  }
  render() {
    let username = this.state.username;
    let password = this.state.password;
    let changename = this.changename;
    let changepsd = this.changepsd;
    return (
      <div className="loginstyle">
        <header className="top-header">
          <Link className="text texta" to="/user">取消</Link>
          <h3>登录</h3>
          <Link className="text" to="/reg">注册</Link>
        </header>
        <div className="login">
          <form method="post">
            <ul className="login-reg">
              <li className="usermsg">
                <img src="/src/assets/images/login.png" />
                <label>账号：</label>
                <input type="text" placeholder="请输入账号" value={username} onChange={changename} />
              </li>
              <li className="usermsg">
                <img src="/src/assets/images/password.png" />
                <label>密码：</label>
                <input type="password" placeholder="请输入密码" value={password} onChange={changepsd} />
              </li>
            </ul>
            <input type="button" value="登录" onClick={() => { this.login() }} />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;