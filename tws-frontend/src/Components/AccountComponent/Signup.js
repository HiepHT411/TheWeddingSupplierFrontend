import React, { Component } from "react";
import './style.css';
import AuthService from "./AuthService";
import {Spring} from "react-spring/renderprops";
class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    AuthService.register(this.state.username, this.state.email, this.state.password).then((res)=>{
        this.goToHomePage();
    });
  };
  
  changeEmailHandler=(e)=>{
    this.setState({email: e.target.value});
  }
  changeUsernameHandler=(e)=>{
      this.setState({username: e.target.value});
  }
  changePasswordHandler=(e)=>{
    this.setState({password:e.target.value});
  }

  
  goToHomePage(){
    this.props.history.push('/');
  };

  
  render() {
    return (
      <div class="main">
              <Spring></Spring>

        <hr/>
        <div class="layout-account">
           <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-xs-12 wrap-box-heading-account">
                    <div class="header-page">
                        <h1>Đăng ký</h1>
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
                              <input placeholder="Tên tài khoản" name="username" class="form-control"
                                value={this.state.username} onChange={this.changeUsernameHandler}></input>
                          </div>
                          <div class="form-group">
                            <input placeholder="Mật khẩu" name="password" class="form-control"
                                    value = {this.state.password} onChange={this.changePasswordHandler}></input>
                          </div>
                                
                          <button className="btn btn-danger" type="submit" >Đăng kí</button>
                        </form>
                      </div>
                    </div>
                    
                    <div id="login" class="user-box login" style={{display:'block'}}>
                            Đã có tài khoản? <a id="" href="/account/login">Đăng nhập</a>
                    </div>
                  </div>
                </div>
             </div>
           </div>
          </div>
        {/* <script src="./showHide.js"></script> */}
      </div>

    /**Here we have a hardcoded username and password, after successful login, 
     we will receive JWT token as a response from a server that is saved in local storage. */
    );
  }
}
export default signup;