import React, {Component} from 'react';
import Job from '../job';

import './jobs-list.css';
import NavigationBar from "../pages/navigation-bar";

export default class JobsList extends Component {

    state = {
        data: this.props.data
    };

    render() {
        console.log("jobs", this.state.data);
        return (
            <div>
                <NavigationBar/>
                <div className="main-left-jobs">
                    <h2>Наиболее подходящие вакансии</h2>
                </div>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
            </div>
        );
    }
}
