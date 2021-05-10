import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import JokesType from './JokesType';
import JokesDescription from './JokesDescription';
import Info from './PassPropsBetweenComponents';
import { Form } from 'reactstrap';
import RegistrationForm from './RegistrationForm';
import Hoc from './HOC';
import {RenderProp} from './RenderProp';
import HookForm from './Hook/Form';
//
import ReduxPage from './ReduxPage'
//
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Services/Reducer/RootReducer';
const store=createStore(rootReducer)
//const App = React.lazy(() => import('./App'))

export default class Routes extends React.Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route exact path="/jokes" component={JokesType} />
                        <Route exact path="/jokes/:cate" component={JokesDescription} />
                        <Route exact path="/passprops_ie" component={Info} />
                        <Route exact path="/registration" component={RegistrationForm} />
                        <Route exact path="/hoc" component={Hoc} />
                        <Route exact path="/renderprop" component={RenderProp} />
                        <Route exact path="/Hook/Form" component={HookForm} />
                        <Route exact path="/redux">
                        <Provider store={store}>
                            <ReduxPage />
                            </Provider>
                        </Route>
                      

                    </Switch>
                </Router>
        )
    }
}