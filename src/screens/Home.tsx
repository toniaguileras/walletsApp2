import React from 'react'
import { Link } from "react-router-dom";

class Home extends React.Component {
    
 

    render(){
        return (
            <>
                <h3 className="d-flex justify-content-center mt-4">Welcome to Wallets!</h3>
                <div className="d-flex justify-content-left">
                    <ul>
                    <li><Link to="/users" className="link-dark">Users</Link></li>
                    </ul>
                </div>
                <div className = "d-flex justify-content-center">
                    <p>This is an example application for Afterpay enterprise. My name is Tony Aguilera Sánchez, 23 year old developer in Java and React Native.</p>
                </div>
            </>
        )
    }  
};

export default Home;
