import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import App from './App';
import JokesType from './JokesType';
import JokesDescription from './JokesDescription';
import Info from './PassPropsBetweenComponents';
import { Form } from 'reactstrap';
import RegistrationForm from './RegistrationForm';

export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route exact path="/jokes" component={JokesType} />
                    <Route exact path="/jokes/:cate" component={JokesDescription} />
                    <Route exact path="/passprops_ie" component={Info} />
                    <Route exact path="/registration" component={RegistrationForm} />
                </Switch>
            </Router>
        )
    }
}