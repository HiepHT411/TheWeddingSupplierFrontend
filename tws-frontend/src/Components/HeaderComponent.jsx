import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import * as NavBar from 'react-bootstrap';

class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    searchItems = () => {
        let endpoint = '';

    }
    render() {
        
        return (

            // <div>
            //     <div className="sub-header">
            //         <div class="container-fluid">
            //         <p>FPT wedding service supplier</p>
            //         </div>
            //     </div>
            //     <header id ="site-header" class = "main-header">
            //       <div className="header-mid wrap-flex-align">
            //         <div class="visible-lg visible-md col-header-mid"></div>
            //         <div className="wrap-logo">
            //             <a href="/">FPT Wedding Planner</a>
            //         </div>
            //         <div class="header-wrap-icon" text-align = "right">
            //             <span class="icon-account" aria-label="Tài khoản" title="Tài khoản">
            //                 <a href="/acount">
            //                     <i class="fas fa-user-circle"/>
            //                 </a>
            //             </span>

            //         </div>
                    
            //         <div class="nav-list">
            //             <div class="nav-item">
            //                 <a href="/" class="nav-link active">Trang chủ</a>
            //             </div>
            //             <div><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                 Sản phẩm
            //             </a></div>
            //             <div class="nav-item">
            //                 <a href="" class="nav-link">Giới thiệu</a>
            //             </div>
            //             <div class="nav-item">
            //                 <a href="" class="nav-link">Blog</a>
            //             </div>
            //             <div class="nav-item">
            //                 <a href="" class="nav-link">Liên hệ</a>
            //             </div>

            //             <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            //                 <a class="dropdown-item" href="#">Nhà bạt</a>
            //                 <a class="dropdown-item" href="#">Xếp mâm</a>
            //                 <a class="dropdown-item" href="#">Bê lễ</a>
            //                 <a class="dropdown-item" href="">Trang trí</a>
            //             </div>
            //         </div>
            //       </div>
            //       <script src="header.js"></script>
            //     </header>

            //     <SearchBar callback={this.searchItems} />

            //</div>
            <div class="header">
                <div className="sub-header">
                       <div class="container-fluid">
                       <p>FPT wedding service supplier</p>
                       </div>
                </div>
                <NavBar.Navbar className="color-nav" expand="lg">
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
                </NavBar.Navbar> 

                <div class="wrap-icon">
                    
                    <a href="/">
                        <img class="user-img" src="images/cart.png"/>
                    </a>
                    <a href="/">
                        <img class="search-img" src="images/search.png"/>
                    </a>
                    <a href="/">
                        <img class="cart-img" src ="images/user.png"/>
                    </a>
                </div>
                <script src = "Elements/header.js"></script>
            </div>
        );
    }
}

export default HeaderComponent;