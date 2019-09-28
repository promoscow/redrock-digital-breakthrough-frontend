import React, {Component} from 'react';

import './index.css'
import {NavigationBar} from './index';
import JobsList from '../jobs-list';
import CourseList from "../cource-list";
import RestServiceMock from "../../service/rest-service-mock";
import {PersonsToQuitList} from "../persons-to-quit-list";

const apiService = new RestServiceMock();

export default class MainPage extends Component {

    state = {
        riskGroup: null,
        vacancies: null,
        courses: null,
        id: null
    };

    componentDidMount() {
        this.getRiskGroup();
    }

    getRiskGroup = async () => {
        return await apiService.getRiskGroup().then(response => this.setState({
            riskGroup: response
        }));
    };

    getVacancies = async (id) => {
        return await apiService.getVacancies(id);
    };

    getCourses = async (query) => {
        return await apiService.getCourses(query);
    };

    render () {
        let riskGroupList = null;
        if (this.state.riskGroup !== null) {
            riskGroupList = <PersonsToQuitList props={this.state.riskGroup}/>;
        }

        let vacanciesList = null;
        if (this.state.vacancies !== null) {
            vacanciesList = <JobsList/>;
        }

        let coursesList = null;
        if (this.state.courses !== null) {
            coursesList = <CourseList/>;
        }

        return (
            <div>
                <div>
                    <NavigationBar/>
                    {riskGroupList}
                    {vacanciesList}
                    {coursesList}
                </div>
            </div>
        );
    }
}
