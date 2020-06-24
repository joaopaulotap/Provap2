import React from 'react';

import{BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Coments from './pages/Coments';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/coments' component={Coments} />
            </Switch>
        </BrowserRouter>
    )
}