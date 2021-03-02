import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Components/HomePage';
import SignIn from './Components/SigninComponent';
import ContactComponent from './Components/ContactComponent';
import IntroComponent from './Components/IntroComponent';

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
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
