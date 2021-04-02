import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Components/HomePage';
import ContactComponent from './Components/ContactComponent';
import IntroComponent from './Components/IntroComponent';
import Login from './Components/AccountComponent/Login';
import Blog from './Components/Blog/Blog';
import CollectionsAll from './Components/Collections/CollectionsAll';
import CollectionsHot from './Components/Collections/CollectionsHot';
import CollectionsSpecial from './Components/Collections/CollectionsSpecial';
import CollectionsCarryService from './Components/Collections/CollectionsCarryService';
import CollectionsFontPage from './Components/Collections/CollectionsFontPage';
import AdminPage from './Components/Admin/AdminPage';
import Signup from './Components/AccountComponent/Signup';
import Cart from './Components/Cart';
import AdminFeedback from './Components/Admin/AdminFeedback';
import BlogDetail from './Components/Blog/BlogDetail';
import AdminBlog from './Components/Admin/AdminBlog';
import AdminEditBlog from './Components/Admin/AdminEditBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="/intro" component={IntroComponent}/>
            <Route path="/blog/news" component={Blog}></Route>
            <Route path="/blog/detail/:id" component={BlogDetail}/>

            <Route path="/collections/all" component={CollectionsAll}/>
            <Route path="/collections/hot-products" component={CollectionsHot}/>
            <Route path="/collections/mam-an-hoi-rong-phuong" component={CollectionsSpecial}/>
            <Route path="/collections/be-le-chuyen-nghiep" component={CollectionsCarryService}/>
            <Route path="/collections/font-page" component={CollectionsFontPage}/>

            <Route exact path="/account/login" component={Login}/>
            <Route exact path ="/account/signup" component={Signup}/>
            
            <Route path ="/adminPage" component={AdminPage}/>
            <Route path = "/user/cart" component={Cart}/>
            <Route path = "/feeadback-management-page" component={AdminFeedback}/>
            <Route path = "/blog-management-page" component = {AdminBlog}/>
            <Route path = "/adminEditBlog/:id" component = {AdminEditBlog}/>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
