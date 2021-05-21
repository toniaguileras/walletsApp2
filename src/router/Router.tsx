import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from '../screens/Home';
import  Users  from '../screens/Users';
import  Wallets  from '../screens/Wallets';

function Router () {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/"><Home/></Route> 
                <Route path="/users"><Users/></Route>
                <Route path="/wallets"><Wallets/></Route>
            </Switch>
        </BrowserRouter>
        )
}
export default Router;
