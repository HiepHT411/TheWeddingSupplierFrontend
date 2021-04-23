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
        
        this.goToBlogManagementPage = this.goToBlogManagementPage.bind(this);
        this.goToProductManagementPage = this.goToProductManagementPage.bind(this);
        this.goToFeedbackManagementPage = this.goToFeedbackManagementPage.bind(this);
    }    
    componentDidMount(){
        this.state.currentUser = AuthService.getCurrentUser();
        let user = this.state.currentUser;

        if (user == null) {
            this.props.history.push('/account/login');
        }
        else if (!user.roles.includes("ROLE_ADMIN")) {
            this.props.history.push('/user/cart');
        }
    }

    goToBlogManagementPage(){
        this.props.history.push('/blog-management-page');
    }
    goToProductManagementPage(){
        this.props.history.push("/product-management-page");
    }
    goToFeedbackManagementPage(){
        this.props.history.push('/feedback-management-page');
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
                        <btn class="btn btn-danger" onClick ={this.handleLogout}>Đăng xuất</btn>
                    </a>
                </div>


                <div class="container-fluid row">
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-right">
                        <div>
                            <a >
                                <button class="btn btn-success" onClick={this.goToBlogManagementPage} >Quản lí blog</button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-left">
                        <div>
                            <a >
                                <button class="btn btn-success" onClick={this.goToProductManagementPage}>Quản lí sản phẩm</button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-sx-12 border-right">
                        <div>
                            <a >
                                <button class="btn btn-success" onClick={this.goToFeedbackManagementPage} >Phản hồi từ người dùng</button>
                            </a>
                        </div>
                    </div>
                </div> 
                    
            </div>
        );
    }
}

export default AdminPage;