import React, { Component } from "react";
import AuthService from './AuthService';
import './style.css';
import UserService from "./UserService";
import { Spring, Transition, animated } from "react-spring/renderprops";
import Signup from './Signup'; 


class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      currentUser: {},
      // loading: false,
      // message: ""
      showSignUpComponent: false
    }
    this.submitLoginHandler = this.submitLoginHandler.bind(this);
  }

  submitLoginHandler(e){
    e.preventDefault();

    //this.setState({message="",loading=true});
    AuthService.login(this.state.username, this.state.password).then(()=>{
        this.state.currentUser = AuthService.getCurrentUser();
        if(this.state.currentUser.roles.includes("ROLE_ADMIN")){
          this.props.history.push('/adminPage');
        }
        else{
          this.props.history.push('/user/cart');
        }
      
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

  showSignUpForm = e => this.setState({showSignUpComponent: !this.state.showSignUpComponent});

  render() {
      //   const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
      // const loginProps = useSpring({ 
      //   left: registrationFormStatus ? -500 : 0, // Login form sliding positions
      // });
      // const registerProps = useSpring({
      //   left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
      // });
    
      // const loginBtnProps = useSpring({
      //   borderBottom: registrationFormStatus 
      //     ? "solid 0px transparent"
      //     : "solid 2px #1059FF",  //Animate bottom border of login button
      // });
      // const registerBtnProps = useSpring({
      //   borderBottom: registrationFormStatus
      //     ? "solid 2px #1059FF"
      //     : "solid 0px transparent", //Animate bottom border of register button
      // });

  // function registerClicked() {
  //   setRegistartionFormStatus(true);
  // }
  // function loginClicked() {
  //   setRegistartionFormStatus(false);
  // }

    return (
      <div class="main">
        
        <hr/>
        <div class="login-register-wrapper">
           <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-xs-12 wrap-box-heading-account">
                    <div class="header-page">
                        <h1>Đăng nhập</h1>
                        <span></span>
                   </div>
                </div>
                <div class="col-md-6 col-xs-12 wrap-box-content-account">
                {/* <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button> 
      </div> */}

      {/* <animated.form action="" id="loginform" style={loginProps}> */}
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

                    {/* <Signup style = {btn} onClick = {this.showSignUpComponent}/> */}
                    <div id="register" class="user-box register" style={{display:'block'}}>
                                  hoặc <a href="/account/signup">Đăng kí</a>
                          {/* <button onClick = {this.showSignUpComponent}>Signup</button> */}
                    </div>
                  </div>
            {/* </animated.form>

            <animated.form action="" id="registerform" style={registerProps}>
        </animated.form> */}
                </div>
             </div>
           </div>
          </div>
          {/* <Transition native items={this.state.showSignUpComponent}
            from={{opacity: 0}}
            enter={{opacity: 1}}
            leave = {{opacity: 0}}
          >
            {show => show && (props => (
              <animated.div><Signup/></animated.div>
            ))}
          </Transition> */}
      </div>

    );
  }
}
export default login;