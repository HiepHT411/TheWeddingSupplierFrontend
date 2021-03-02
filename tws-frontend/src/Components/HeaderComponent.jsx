import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import * as NavBar from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {
            search: false,
            setSearch: false,
            
        }
    }

    submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }

    openSearch=()=>{
        this.state.setSearch = true;
    }
    render() {
        
        return (
            
            <div>
                <div className="sub-header">
                       <p>FPT wedding service supplier system</p>
                       
                </div>
            <div class="main-header">
                
                {/* <NavBar.Navbar className="color-nav" expand="lg">
                    <NavBar.Navbar.Brand className="logo" href="http://localhost:3000">The Wedding Supplier</NavBar.Navbar.Brand>
                    <NavBar.Navbar.Toggle aria-controls="basic-navbar-nav" data-target="basic-navbar-nav" />
                        <NavBar.Navbar.Collapse id="basic-navbar-nav">
                            <NavBar.Nav className="mr-auto" >
                            <NavBar.Nav.Link class= "" href="http://localhost:3000">Trang chủ</NavBar.Nav.Link>
                            <NavBar.NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
                                <NavBar.NavDropdown.Item href="#">Nhà Bạt</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Divider/>
                                <NavBar.NavDropdown.Item href="#">Xếp mâm</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Divider/>
                                <NavBar.NavDropdown.Item href="#">Bê lễ</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Divider/>
                                <NavBar.NavDropdown.Item href="#">Trang trí</NavBar.NavDropdown.Item>                     
                            </NavBar.NavDropdown>
                            <NavBar.Nav.Link href="/introduction">Giới thiệu</NavBar.Nav.Link>
                            <NavBar.Nav.Link href="/blog">Blog</NavBar.Nav.Link>
                            <NavBar.Nav.Link href="http://localhost:3000/contact">Liên hệ</NavBar.Nav.Link>
                            </NavBar.Nav>
                            
                        </NavBar.Navbar.Collapse> 
                </NavBar.Navbar>  */}

                
                <div class="logo">
                    <a href="http://localhost:3000">
                        <h3>The Wedding Supplier</h3>
                    </a>
                </div>


                <div class="nav-bar">
                    <nav className="header-menu">
                        <a href="http://localhost:3000">Home</a>
                        <a href="/collections">Productions</a>
                        <a href="/intro">Introduction</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>  

                <div class="wrap-icon">
                    
                    <a href="/">
                        <img class="user-img" src="images/cart.png"/>
                    </a>
                    <a href="/">
                        <img onClick={this.openSearch} class="search-img" src="images/search.png"/>
                    </a>
                    <a href="/">
                        <img class="cart-img" src ="images/user.png"/>
                    </a>
                </div>
            </div>
            <div class="search">
            <form onSubmit={this.submitSearch}>
                <input type="text" className={this.searchClass} placeholder="Search..."></input>
            </form>
            </div>
            </div>

            
        );
    }
}

export default HeaderComponent;