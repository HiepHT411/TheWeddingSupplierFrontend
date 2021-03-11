import React, { Component } from "react";
import axios from 'axios';
import AuthService from './AuthService';
import './style.css';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
      // loading: false,
      // message: ""
    }
    this.submitLoginHandler = this.submitLoginHandler.bind(this);
  }

  submitLoginHandler(e){
    e.preventDefault();

    //this.setState({message="",loading=true});
    AuthService.login(this.state.username, this.state.password).then(()=>{
      this.props.history.push('/');
      window.location.reload();
    });

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
        
        <hr/>
        <div class="layout-account">
           <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-xs-12 wrap-box-heading-account">
                    <div class="header-page">
                        <h1>Đăng nhập</h1>
                        <span></span>
                   </div>
                </div>
                <div class="col-md-6 col-xs-12 wrap-box-content-account">
                  <div id="customer-login">
                    <div id="login" class="user-box login" style={{display: 'block'}}>
                      <div class="card-body">
                        <form class="form-signin" onSubmit={this.submitLoginHandler}>
                          <div class="form-group">
                            <input placeholder="Username.." name="username" class="form-control"
                                   value = {this.state.username} onChange={this.changeUsernameHandler}></input>
                          </div>
                          <div class="form-group">
                            <input placeholder="Password.." name="password" class="form-control"
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
                                  hoặc <a href="/account/signup">Đăng kí</a>
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