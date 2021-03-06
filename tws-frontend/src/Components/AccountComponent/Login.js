import React, { Component } from "react";
import axios from 'axios';
import LoginService from './LoginService';
import './style.css';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    const user_object = {
      username: username,
      password: password
    };
    
    LoginService.checkCredential(user_object).then(res => {
      //alert("Before set authorization");
      localStorage.setItem("authorization", res.data.token); //lay token tu BE
      //alert("After set authorization. Res.data.token: "+res.data.token);
      if (this.state.username == "admin"){
        return this.goToAdminPage();
      } else{
        return this.goToHomePage();
      }
    });
  };
  
  goToAdminPage(){
    LoginService.confirmCall().then(res =>{
      if(res.data === "successCall"){
        this.props.history.push('/adminPage');
      }
      else{
        alert("Authenication failure");
      }
    });
  };
  goToHomePage(){
    this.props.history.push('/');
  };

  handleDashboard() {
    LoginService.confirmCall().then(res => {
      alert("res.data: "+ res.data.token);
      if (res.data === "successCall") {
        this.props.history.push("/dashboard");
      } else {
        alert("Authentication failure");
      }
    });
  }
  changeEmailHandler=(e)=>{
    this.setState({username: e.target.value});
  }
  changePasswordHandler=(e)=>{
    this.setState({password:e.target.value})
  }
  render() {
    return (
      <div class="main">
        {/* <div class="wrapper">
          <form class="form-signin" onSubmit={this.handleFormSubmit}>
            <h2 class="form-signin-heading">Please login</h2>
            <div className="form-group">
              <input type="text"
                class="form-control"
                placeholder="User name"
                value="admin"
              />
            </div>
            <div className="form-group">
              <input type="password"
                class="form-control"
                placeholder="password"
                value="admin"
              />
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div> */}
        <hr/>
        <div class="layout-account">
           <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-xs-12 wrap-box-heading-account">
                    <div class="header-page">
                        <h1>Login</h1>
                        <span></span>
                   </div>
                </div>
                <div class="col-md-6 col-xs-12 wrap-box-content-account">
                  <div id="customer-login">
                    <div id="login" class="user-box login" style={{display: 'block'}}>
                      <div class="card-body">
                        <form class="form-signin" onSubmit={this.handleFormSubmit}>
                          <div class="form-group">
                            <input placeholder="Email" name="email" class="form-control"
                                   value = {this.state.email} onChange={this.changeEmailHandler}></input>
                          </div>
                          <div class="form-group">
                            <input placeholder="Mật khẩu" name="password" class="form-control"
                                    value = {this.state.password} onChange={this.changePasswordHandler}></input>
                          </div>
                                
                          <button className="btn btn-danger" type="submit" >Đăng nhập</button>
                        </form>
                      </div>
                    </div>
                    <div id="recover-password" class="user-box signin" style={{display: 'block'}}>
                      <a id="" href="">Quên mật khẩu?</a>
                    </div>
                    <div id="register" class="user-box register" style={{display:'block'}}>
                                  hoặc <a id="" href="">Đăng kí</a>
                    </div>
                  </div>
                </div>
             </div>
           </div>
          </div>
        <script src="./showHide.js"></script>
      </div>

    /**Here we have a hardcoded username and password, after successful login, 
     we will receive JWT token as a response from a server that is saved in local storage. */
    );
  }
}
export default login;