import React, {Component} from 'react';
import Job from '../job';

import './jobs-list.css';

export default class JobsList extends Component {
    render() {
        return (
            <div>
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
