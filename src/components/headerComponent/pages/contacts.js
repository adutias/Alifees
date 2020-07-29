import React, { Component } from 'react'
export default class contacts extends Component {
    render() {
        return (
            <div className="contacts">
 
                <h1>Contact Us</h1>

                <p>"We exist to serve you!"</p>

                <div className="phone">
                <h2> <img src ="https://i.imgur.com/OnslG8O.jpg" className="logo-image" alt="company logo"/> Talk to us</h2> 
                
                <ul>
                <li>+256 774 203765</li>
                <li>+256 393 243278</li>
                <li>+256 774 203484</li>
                </ul>
                </div>

                <div className="email">
                <h2><img src ="https://i.imgur.com/0lR0lRe.png" className="logo-image" alt="company logo"/>Email us</h2>

                <ul>
                <li>< a href="mailto:info@alifees.com " >info@alifees.com</a></li>
                <li> We typically respond to all emails in a timely matter, however for very urgent matters please call the numbers above</li>
               <li> </li>
                </ul>
                </div>
                 
            </div>


        )
    }
}
