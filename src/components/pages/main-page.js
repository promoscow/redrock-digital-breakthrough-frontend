import React, {Component} from 'react';

import './index.css'
import UtilService from "../../service/util-service";
import {NavigationBar} from './index';
import {PersonsToQuitList} from '../persons-to-quit-list';
import JobsList from '../jobs-list';
import CourseList from "../cource-list";

const utilService = new UtilService();

export default class MainPage extends Component {

    componentDidMount() {
        // checkToken.call(this);
    }

    render () {
        return (
            <div>
                <div>
                    <NavigationBar/>
                    <PersonsToQuitList/>
                    <br/>
                    <JobsList/>
                    <br/>
                    <CourseList/>
                    {/*<PersonalPage/>*/}
                    {/*<Post/>*/}
                    {/*<NewsPage/>*/}
                </div>
            </div>
        );
    }
}

function checkToken() {
    let jwtToken = localStorage.getItem("auth_token");
    if (jwtToken === null || jwtToken === undefined) {
        console.warn("token not found, redirecting to login page");
        this.props.history.push(`/login`);
    }
    console.log(jwtToken);
    const parsedJwt = utilService.parseJwt(jwtToken);
    console.log(parsedJwt);
    const exp = parsedJwt.exp;
    if (new Date().getTime() > exp * 1000) {
        console.warn("token expired, redirecting to login page");
        this.props.history.push(`/login`);
    }
}
