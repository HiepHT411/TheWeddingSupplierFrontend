import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import { withRouter } from "react-router-dom";

import * as NavBar from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import AuthService from './AccountComponent/AuthService';
import UserService from './AccountComponent/UserService';
import SearchBar from './SearchBar/SearchBar';
import {API_URL, API_KEY} from '../config';
import { Navbar } from '../Components/NavBar';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: {},
            products: [],
            loading: false,
            searchTerm: ''
        }
        this.goToUsersCart = this.goToUsersCart.bind(this);
        this.goToLoginPage = this.goToLoginPage.bind(this); 
        this.getPublicContent = this.getPublicContent.bind(this);
    }

   
    getPublicContent(){
        UserService.getPublicContent().then(res=>{
            if(res.data == "publicContent"){
                this.props.history.push("/intro");
            }
        })
    }

    goToUsersCart(e){
        e.preventDefault();
        this.state.currentUser = AuthService.getCurrentUser();
        if(this.state.currentUser == null){
            this.props.history.push("/account/login");
        }else{
            this.props.history.push("/user/cart");
        }
    }

    goToLoginPage(e){
        e.preventDefault();
        this.state.currentUser = AuthService.getCurrentUser();
        if(this.state.currentUser == null){
            this.props.history.push("/account/login");
        }else{
            this.props.history.push("/user/cart");
        }
    }

    searchItems = (searchTerm) => {
        let endpoint = '';

        this.setState({
            products: [],
            loading: true,
            searchTerm
        })

        if(searchTerm  === ''){
            endpoint = `${API_URL}product/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/product?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                products: [...this.state.products, ...result.results],
                loading: false
            }, ()=> {
                if(this.state.searchTerm === ""){
                localStorage.setItem('HomeState', JSON.stringify(this.state));
                }
            })
        })
        .catch(error => console.error('Error:', error))
    }


    render() {
        
        return (
            
            <div>
                
                <div className="sub-header" >
                       <p>FPT wedding service supplier system</p>
                       
                </div>
                <Navbar/>
            {/* <div class="main-header" role="navigation">
                
                <div class="logo navbar-brand">
                    <a href="http://localhost:3000">
                        <h3>The Wedding Supplier</h3>
                    </a>
                </div> */}

                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
                {/* <div class="navbar" id="navbarNav">
                    <nav className="header-menu">
                        
                        <li class="nav-item"><a href="http://localhost:3000">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="dropdown-toggle" href="/collections/all" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productions</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                         </li>
                        <li class="nav-item" ><a role="button" onClick={this.getPublicContent} >Introduction</a></li>
                        <li class="nav-item"><a href="/blog/news">Blog</a></li>
                        <li class="nav-item"><a href="/contact">Contact</a></li>
                        
                    </nav>
                </div>   */}
                
                {/* <div class="wrap-icon">
                    
                    <a>
                        <img onClick={this.goToUsersCart} class="cart-img" src="/images/cart.png"/>
                    </a>
                    <a href="/">
                        <img onClick={this.openSearch} class="search-img" src="/images/search.png"/>
                    </a>
                    <a >
                        <img onClick={this.goToLoginPage} class="user-img" src ="/images/user.png"/>
                    </a>
                </div> */}
                
            {/* </div> */}
            
            {/* <SearchBar callback={this.searchItems}/> */}
            
            </div>

            
        );
    }
}
export default withRouter(HeaderComponent);