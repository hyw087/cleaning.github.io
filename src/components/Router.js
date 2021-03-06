/** @format */

import React, { useState } from 'react';
// import SignUp from '../routes/signUp';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import SignUpComp from '../routes/SignUpComp';
import SignUp from '../routes/SignUp';
import LogIn from '../routes/LogIn';
import InfoInput from '../routes/InfoInput';
import MemberModifiy from '../routes/MemberModifiy';
import Board from '../routes/Board/Board';
import QnA from '../routes/Board/QnA';
import QnAWriteForm from '../routes/Board/QnAWriteForm';

const AppRouter = () => {
    // console.log(isLoggedIn);
    const [user, setUser] = useState(null);
    const logout = () => setUser(null);
    const cureentUser = JSON.parse(sessionStorage.getItem('User'));
    // console.log(logout);
    // const isLogin ?
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user} logout={logout} />
                </Route>

                <Route exact path="/SignUp">
                    <SignUp />
                </Route>

                <Route exact path="/SignUpComp">
                    <SignUpComp />
                </Route>

                <Route exact path="/Login">
                    {/* 아버지    /  아들이 준 데이터를 받음*/}
                    <LogIn
                        onLogin={(loginUser) => {
                            setUser(loginUser);
                        }}
                    />
                </Route>

                <Route exact path="/asd">
                    <InfoInput />
                </Route>

                <Route exact path="/MemberModifiy/">
                    <MemberModifiy cureentUser={cureentUser} />
                </Route>

                <Route exact path="/Board">
                    <Board />
                </Route>
                <Route exact path="/QnA">
                    <QnA />
                </Route>
                <Route exact path="/QnAWriteForm">
                    <QnAWriteForm />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
