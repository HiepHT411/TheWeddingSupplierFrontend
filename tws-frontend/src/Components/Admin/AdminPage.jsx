import React, { Component } from 'react';
import AuthService from '../AccountComponent/AuthService';
import UserService from '../AccountComponent/UserService';
class AdminPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            checker: '',
            currentUser: AuthService.getCurrentUser()
        }
    }    
    componentDidMount(){
        UserService.getAdminBoard().then((response)=>{
            this.state.checker = response.data;
            if(this.state.checker !== "confirmedAdminRole"){
                alert("You need to be admin to access this service");
                this.props.history.push("/account/login");
            }
        },
        error => {
            this.setState({
              content:
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString()
            });
          }
        );
    }
    handleLogout() {
        //localStorage.clear();
        localStorage.removeItem("user");
        window.location.href = "/account/login";
    }

    
    render() {
        return (
            <div class="main" >
                <div>
                    <header className="jumbotron">
                        <h3>
                            <strong>{this.state.currentUser.username}</strong> Profile
                        </h3>
                    </header>
                    <p>
                        <strong>Token:</strong> {this.state.currentUser.accessToken}
                    </p>
                    <p>
                        <strong>Id:</strong> {this.state.currentUser.id}
                    </p>
                    <p>
                        <strong>Email:</strong> {this.state.currentUser.email}
                    </p>
                        <strong>Authorities:</strong>
                    <ul>
        {this.state.currentUser.roles && this.state.currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                    </ul>
                    <a href="/">
                        <btn class="btn btn-danger" onClick ={this.handleLogout}>Logout</btn>
                    </a>
                </div>


                <div class="container-fluid row">
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-right">
                        <div>
                            <a href="/blog-management-page">
                                <button class="btn btn-success" >Quản lí blog</button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-left">
                        <div>
                            <a href="/product-management-page">
                                <button class="btn btn-success">Quản lí sản phẩm</button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-right">
                        <div>
                            <a href="/feeadback-management-page">
                                <button class="btn btn-success" >Feedback</button>
                            </a>
                        </div>
                    </div>
                </div> 
                    
            </div>
        );
    }
}

export default AdminPage;