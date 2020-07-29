import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';



import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Contacts from './components/pages/contacts';
import About from './components/pages/about';
import './Assets/css/default.min.css';
import './Assets/scss/default.scss';


function App() {
  
  return (
    <Router>
    <div className="App">
      <Header/>

     <Route exact path='/' component={Homepage} /> 
     <Route exact path='/products' component={Products} />
     <Route exact path='/contacts' component={Contacts} />
     <Route exact path='/about' component={About} />

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
