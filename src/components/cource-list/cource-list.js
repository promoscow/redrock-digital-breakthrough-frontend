import React, {Component} from 'react';
import Course from '../cource';
import NavigationBar from "../pages/navigation-bar";

import './cource-list.css';
import RestServiceMock from "../../service/rest-service-mock";

const apiService = new RestServiceMock();

export default class CourseList extends Component {

    state = {
        courses: null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const q = query.get('query');
        this.getCourses(q);
    }

    getCourses = async (query) => {
        return await apiService.getCourses(query).then(response => this.setState({
            courses: response
        }))
    };

    render() {

        console.log(this.state.courses);
        let courses = null;
        if (this.state.courses !== null) {
            courses =
                <div>
                    <div className="main-left-course">
                        <h2>Рекомендованные курсы</h2>
                    </div>
                    <div className="main-left-course">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Курс</th>
                                <th scope="col">Действие</th>
                            </tr>
                            </thead>
                            {this.state.courses.map((r) => <Course cells={r}/>)}
                            <div>
                                <button
                                    className="btn-secondary button-custom-course"
                                    onClick={this.onSubmit}>
                                    Предложить все
                                </button>
                            </div>
                        </table>
                    </div>
                </div>;
        }

        return (
            <div>
                <NavigationBar/>
                {courses}
            </div>
        );
    }
}
