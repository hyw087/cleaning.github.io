import React from 'react';
// import SignUp from '../routes/signUp';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../routes/Home';
import InfoInput from '../routes/InfoInput';
import SignUp from '../routes/SignUp';

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn} (
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/SignUp">
                        <SignUp />
                    </Route>

                    <Route exact path="/InfoInput">
                        <InfoInput />
                    </Route>
                )
            </Switch>
        </Router>
    )
}

export default AppRouter
