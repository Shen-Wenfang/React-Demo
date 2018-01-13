import React from "react";
import { Link, hashHistory } from 'react-router';

import '../assets/css/showmsg.css'

class Reg extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      psdok: '',
      nickname: '',
      showmsg: '',
      showstyle: { display: 'none' }
    },

    this.changename = this.changename.bind(this);
    this.changepsd = this.changepsd.bind(this);
    this.changepsdok = this.changepsdok.bind(this);
    this.changenickname = this.changenickname.bind(this);
    this.register = this.register.bind(this);
    this.showmsg = this.showmsg.bind(this);
  }
  changename(ev) {
    let username = ev.target.value;
    // console.log(/^1[3|4|5|8]\d{9}$/.test(username))
    if (/^1[3|4|5|8]\d{9}$/.test(username)) {
      this.setState({
        username: username,
        showstyle: { display: 'none' }
      })
    } else {
      this.setState({
        username: username,
        showstyle: { display: 'block' },
        showmsg: "手机号码格式不正确哦~~"
      })
    }
  }
  changepsd(ev) {
    let password = ev.target.value;
    if (/^[\w]{6,12}$/.test(password)) {
      this.setState({
        password: password,
        showstyle: { display: 'none' }
      })
    } else {
      this.setState({
        password: password,
        showstyle: { display: 'block' },
        showmsg: "密码由6-12位字母数字组成"
      })
    }

  }
  changepsdok(ev) {
    let psdok = ev.target.value;
    let password = this.state.password;
    if (password === psdok) {
      this.setState({
        psdok: ev.target.value,
        showstyle: { display: 'none' }
      })
    } else {
      this.setState({
        psdok: psdok,
        showstyle: { display: 'block' },
        showmsg: "密码输入不一致"
      })
    }
  }
  changenickname(ev) {
    let nickname = ev.target.value;
    this.setState({
      nickname: ev.target.value
    })
  }
  showmsg(ev) {
    let showmsg = ev.target.value;
    this.setState({
      showmsg: showmsg
    })
  }
  register() {
     let nickname=this.state.nickname;
     let password=this.state.password;
     let username=this.state.username;
     if (/^[ ]+$/.test(nickname)||/^[ ]+$/.test(username)||/^[ ]+$/.test(password)) {
      this.setState({
        showstyle: { display: 'block' },
        showmsg: "请将信息填写完整"
      })
    }

    var params = new URLSearchParams();
    params.append("nickname", this.state.nickname);
    params.append("username", this.state.username);
    params.append("password", this.state.password);
    fetch("http://localhost:3000/user/reg", {
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
          this.props.router.push("/login");
          this.setState({
            nickname: '',
            username: '',
            password: '',
            psdok: ''
          })
        }
        if (data.error == 1) {
          alert(data.msg)
          this.setState({
            nickname: '',
            username: '',
            password: '',
            psdok: ''
          })
        }
        if(data.error == 2){
            alert(data.msg)
        }
      }
      )
  }
  render() {
    let username = this.state.username;
    let password = this.state.password;
    let nickname = this.state.nickname;
    let psdok = this.state.psdok;
    let changename = this.changename;
    let changenickname = this.changenickname;
    let changepsd = this.changepsd;
    let changepsdok = this.changepsdok;
    return (
      <div className="regstyle">
        <header className="top-header">
          <a className="text texta" href="javascript:;" onClick={() => { this.props.router.go(-1) }}>返回</a>
          <h3>立即注册</h3>
        </header>
        
        <div className="login">
        <div className="showmsg" style={this.state.showstyle}>
            <input type="text" value={this.state.showmsg} onChange={this.showmsg} className="textstyle" />
          </div>
          <form action="" method="post">
            <ul className="login-reg">
              <li className="usermsg">
                <img src="/src/assets/images/login.png" />
                <input type="text" value={nickname} placeholder="请输入昵称" onChange={changenickname} />
              </li>
              <li className="usermsg">
                <img src="/src/assets/images/login.png" />
                <input type="text" value={username} placeholder="请输入手机号码" onChange={changename} />

              </li>

              <li className="usermsg">
                <img src="/src/assets/images/password.png" />
                <input type="password" value={password} placeholder="请输入6-12位字母数字组合密码" onChange={changepsd} />
              </li>
              <li className="usermsg">
                <img src="/src/assets/images/password.png" />
                <input type="password" value={psdok} placeholder="请确认密码" onChange={changepsdok} />
              </li>
            </ul>

            <input type="button" value="立即注册" onClick={() => { this.register() }} />

          </form>
          
        </div>
      </div>
    );
  }

}

export default Reg;