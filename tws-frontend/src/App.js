import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import interceptors from './Interceptors';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Components/HomePage';
import ContactComponent from './Components/ContactComponent';
import IntroComponent from './Components/IntroComponent';
import Login from './Components/AccountComponent/Login';
import Post from './Components/Post';
import CollectionsAll from './Components/Collections/CollectionsAll';
import CollectionsHot from './Components/Collections/CollectionsHot';
import CollectionsSpecial from './Components/Collections/CollectionsSpecial';
import CollectionsCarryService from './Components/Collections/CollectionsCarryService';
import CollectionsFontPage from './Components/Collections/CollectionsFontPage';
import dashboard from './Components/AccountComponent/Dashboard';



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
            <Route path="/blog/news" component={Post}></Route>
            {/* <Route path="/post/" component={Post}/> */}
            <Route path="/collections/all" component={CollectionsAll}/>
            <Route path="/collections/hot-products" component={CollectionsHot}/>
            <Route path="/collections/mam-an-hoi-rong-phuong" component={CollectionsSpecial}/>
            <Route path="/collections/be-le-chuyen-nghiep" component={CollectionsCarryService}/>
            <Route path="/collections/font-page" component={CollectionsFontPage}/>

            <Route exact path="/account/login" component={Login}/>
            <Route exact path="/dashboard" component={dashboard}/>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
