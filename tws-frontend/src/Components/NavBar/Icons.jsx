import React from "react";
import { Component } from "react";
import styled from 'styled-components';
import AuthService from '../AccountComponent/AuthService';
import SearchBar from "../SearchBar/SearchBar";
import { useHistory } from "react-router-dom";


// export default class Icons extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             currentUser: {}
//         }
//         this.goToLoginPage = this.goToLoginPage.bind(this);
//         this.goToUsersCart = this.goToUsersCart.bind(this);
//     }
//     goToUsersCart(e){
//         e.preventDefault();
//         this.state.currentUser = AuthService.getCurrentUser();
//         if(this.state.currentUser == null){
//             this.props.history.push("/account/login");
//         }else{
//             this.props.history.push("/user/cart");
//         }
//     }

//     goToLoginPage(e){
//         e.preventDefault();
//         this.state.currentUser = AuthService.getCurrentUser();
//         if(this.state.currentUser == null){
//             this.props.history.push("/account/login");
//         }else{
//             this.props.history.push("/user/cart");
//         }
//     }

//     render(){
//         return (
//             <WrapIcon>
//             <a>
//                 <WrapIconImg onClick={this.goToUsersCart} class="cart-img" src="/images/cart.png"/>
//             </a>
//             <a href="/">
//                 <WrapIconImg   class="search-img" src="/images/search.png"/>
//                 {/* {true && <SearchBar/>} */}
//             </a>
//             <a >
//                 <WrapIconImg onClick={this.goToLoginPage} class="user-img" src ="/images/user.png"/>
//             </a>
//             </WrapIcon>
//         );
//     }
// }
const WrapIcon = styled.div`
    margin-right: 80px;
`;

const WrapIconImg = styled.img`
    width: 2.5rem;
    float: right;
    padding-right: 1rem;
    margin-top: 1rem;
`;

// function goToUsersCart(e){
//     e.preventDefault();
//     if(AuthService.getCurrentUser() == null){
//         this.props.history.push("/account/login");
//     }else{
//         this.props.history.push("/user/cart");
//     }
// };
// function goToLoginPage(e){
//     e.preventDefault();
//     if(AuthService.getCurrentUser() == null){
//         props.history.push("/account/login");
//     }else{
//         props.history.push("/user/cart");
//     }
// };


export function Icons(props){
    //const [searchBarIsOpen, searchBarSetOpen] = useState(false);
    // isOpen ={searchBarIsOpen} toggle={()=> searchBarSetOpen(!searchBarIsOpen)}

    let history = useHistory();

    const goToLoginPage = (e) => {
        e.preventDefault();
        if(AuthService.getCurrentUser() == null){
            history.push("/account/login");
        }else if(AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            history.push('/adminPage');
        }
        else{
            history.push("/user/cart");
        }
    };
    const goToUsersCart = (e) => {
            e.preventDefault();
            if(AuthService.getCurrentUser() == null){
                history.push("/account/login");
            }else{
                history.push("/user/cart");
            }
        };
    return (
        <WrapIcon>
            <a>
                <WrapIconImg onClick={goToUsersCart} class="cart-img" src="/images/cart.png"/>
            </a>
            <a href="/">
                <WrapIconImg   class="search-img" src="/images/search.png"/>
                {/* {true && <SearchBar/>} */}
            </a>
            <a >
                <WrapIconImg onClick={goToLoginPage} class="user-img" src ="/images/user.png"/>
            </a>
        </WrapIcon>
    );
}
