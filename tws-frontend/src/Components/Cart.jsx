import React, { Component } from 'react';
import AuthService from './AccountComponent/AuthService';

class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }
    
    handleLogout() {
        //localStorage.clear();
        localStorage.removeItem("user");
        window.location.href = "/account/login";
    }

    render() {
        return (
            <div class= "main">
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
                
            </div>
        );
    }
}

export default Cart;