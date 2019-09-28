import React, {Component} from 'react';
import Job from '../job';

import './jobs-list.css';
import NavigationBar from "../pages/navigation-bar";
import RestServiceMock from "../../service/rest-service-mock";

const apiService = new RestServiceMock();

export default class JobsList extends Component {

    state = {
        jobs: null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id');
        this.getVacancies(id);
    }

    getVacancies = async (id) => {
        return await apiService.getVacancies(id).then(response => this.setState({jobs: response}))
    };

    render() {

        console.log(this.state.jobs);
        let jobs = null;
        if (this.state.jobs !== null) {
            jobs =
                <div>
                    <div  className="main-left-jobs">
                        <h2>Наиболее подходящие вакансии</h2>
                    </div>
                    <div>
                        {this.state.jobs.map((r) => <Job cells={r}/>)}
                    </div>
                </div>

        }

        return (
            <div>
                <NavigationBar/>
                {jobs}
            </div>
        );
    }
}
