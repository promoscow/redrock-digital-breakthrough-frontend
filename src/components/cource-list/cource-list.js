import React, {Component} from 'react';
import Course from '../cource';
import NavigationBar from "../pages/navigation-bar";

import './cource-list.css';

export default class CourseList extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="main-left-course">
                    <h2>Рекомендованные курсы</h2>
                </div>
                <div className="main-left-course">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Курс</th>
                            <th scope="col">Эффективность</th>
                            <th scope="col">Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        <Course/>
                        </tbody>
                        <div>
                            <button
                                className="btn-secondary button-custom-course"
                                onClick={this.onSubmit}>
                                Предложить все
                            </button>
                        </div>
                    </table>
                </div>
            </div>
        );
    }
}
