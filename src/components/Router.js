import React, { useState } from 'react';
// import SignUp from '../routes/signUp';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../routes/Home';
import SignUpComp from '../routes/SignUpComp';
import SignUp from '../routes/SignUp';
import LogIn from '../routes/LogIn';
import InfoInput from '../routes/InfoInput';
import MemberModifiy from '../routes/MemberModifiy';


const AppRouter = () => {
    // console.log(isLoggedIn);
    const [user , setUser] = useState(null);
    const logout = () => setUser(null);
    console.log(user);
    // console.log(logout);
    // const isLogin ?
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user} logout={logout}/>
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
                        onLogin={(loginUser) => {setUser(loginUser)}}/>
                </Route>

                <Route exact path="/asd"> 
                    <InfoInput />
                </Route>

                <Route exact path="/MemberModifiy">
                    <MemberModifiy />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
