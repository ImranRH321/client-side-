import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route,  Link, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import PageNotFoun from './Pages/Home/PageNotFound/PageNotFoun';
import Login from './Pages/Home/Login/Login'; 
import Header from './Pages/Home/Header/Header';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import Banner from './Pages/Home/Banner/Banner';
   
import AuthProvider from './Contexts/AuthProvider';
import Footer from './Pages/Home/Footer/Footer';
import Our from './Pages/Home/Our/Our';



function App() {
  return (
    <div className="App">
      
    <AuthProvider>
      <Router> 
        <Header></Header> 
        <Switch>
          <Router exact path='/'>
            <Home></Home>
          </Router>
          <Router path='/home'>
            <Home></Home>
          </Router>
          <Router path='/about'>
            <About></About>
          </Router>
          <Router path='/services'>
            <Services></Services>
          </Router> 
          <Router path='/our'>
            <Our></Our>
          </Router> 

          <Router path='/contact'>
           <Contact></Contact>
          </Router>
          <Router path='/login'>
            <Login></Login>
          </Router>
          <Router  path='*'>
            <PageNotFoun></PageNotFoun>
          </Router>
        </Switch> 
      </Router> 
      <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
