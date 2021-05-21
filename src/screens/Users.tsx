import React from 'react';
import { Link } from 'react-router-dom';
import CardProfile from './CardProfile';

class Users extends React.Component{
   render(){
        return (
            <div>
                <div className="d-flex justify-content-left mt-4"><Link className="link-dark" to="/">Home</Link></div>
                    <div>
                    <h3 className="d-flex justify-content-center mt-1 mb-4">Users Page</h3>      
                    <CardProfile name="Toni" surname="Aguilera" email="toniaguileras@gmail.com" username="toni_aguilera" />
                </div>
            </div>
        )
   }
};
export default Users;
