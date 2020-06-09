import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './pages/login';
import Resgister from './pages/resgister';
import Profile from './pages/profile'
import NewIncidents from './pages/newIncidents'
import Adim from './pages/loginAdmim'
import controlAdim from './pages/controlAdim'

export default function Routers(){

      return (
        <BrowserRouter>
        
        <Switch>
            <Route path="/" exact component={ Login } />
            <Route path="/register" component={Resgister} />
            <Route path="/profile/" component={Profile}/>
            <Route path="/incidents/new" component={NewIncidents}/>
            <Route path="/adim" component={Adim} />
                  <Route path="/controlAd" component={controlAdim} />
       </Switch>

        </BrowserRouter>
    );  
    
}

 