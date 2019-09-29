import React, {Component} from 'react';
import Job from '../job';

import './jobs-list.css';
import NavigationBar from "../pages/navigation-bar";
import person from "../../resources/account-search-outline.png";
import RestService from "../../service/rest-service";

const apiService = new RestService();

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

        console.log("jobs: ", this.state.jobs);
        let jobs = null;
        if (this.state.jobs !== null) {
            jobs =
                <div>
                    <div className="job">
                        <table>
                            <tr>
                                <td>
                                    <div className="main-left-title">
                                    <img src={person}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="main-left-title">
                                        <br/>
                                        <h2 className="main-color">Наиболее подходящие вакансии</h2>
                                        <hr/>
                                        <h4>Ниже подобраны вакансии, наиболее подходящие для переквалификации данного сотрудника, на основании исторического опыта компании. Вы можете выбрать программу переобучения.</h4>
                                        <br/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div  className="job">
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
