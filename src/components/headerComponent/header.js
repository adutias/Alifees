import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';


export default class header extends Component {
    render() {
        return (
            <header className="header">
                
                <div className="logo">
                <img src ="https://i.imgur.com/Ygsjg9N.jpg" className="logo-image" alt="company logo"/>

                <h4 className="logo-text"><span className="alife">Alife </span>Engineering Solutions Ltd</h4>
                </div>

              
              <nav>
                  <ul>
                      <li className="first">

                          <Link to="/">HOME</Link>
                          
                      </li>
                      <li className="first">

                          <Link to="/about">ABOUT US</Link>
                          
                      </li>
                      <li>

                      <Link to="/Products">PRODUCTS</Link>
                        
                      </li>
                      <li className="last">

                      <Link to="/Contacts">CONTACT US</Link>
                         
                      </li>
                  </ul>
              </nav>
            </header>
        )
    }
}
