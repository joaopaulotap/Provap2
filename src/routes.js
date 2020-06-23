import React from 'react';

import{Browser, Route, Switch} from 'react -router -dom';

import Home from './pages/Home';
import { Router, BrowserRouter } from 'react-router-dom';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}