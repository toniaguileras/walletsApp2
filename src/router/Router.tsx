import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from '../screens/Home';
import UserWallets from '../screens/UserWallets';
import  Users  from '../screens/Users';

function Router () {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/"><Home/></Route> 
                <Route exact path="/users"><Users/></Route>
                <Route path="/wallets/user/:id" component={UserWallets}/>
            </Switch>
        </BrowserRouter>
        )
}
export default Router;
