import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Post from './components/post';
import Erro from './components/erro';



const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;