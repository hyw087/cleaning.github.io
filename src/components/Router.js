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
    console.log(user);
    // const isLogin ?
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user}/>
                </Route>

                <Route exact path="/SignUp">
                    <SignUp />
                </Route>

                <Route exact path="/SignUpComp">
                    <SignUpComp />
                </Route>

                <Route exact path="/Login"> 
                {/* 아버지    /  아들이 준 데이터를 받음*/}
                    <LogIn onLogin={(loginUser) => {setUser(loginUser)}}/>
                </Route>

                <Route exact path="/asd"> 
                    <InfoInput />
                </Route>

                <Route exact path="/asddsad">
                    <MemberModifiy />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
