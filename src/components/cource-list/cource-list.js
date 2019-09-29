import React, {Component} from 'react';
import Course from '../cource';
import NavigationBar from "../pages/navigation-bar";

import './cource-list.css';
import person from "../../resources/account-star-outline.png";
import RestService from "../../service/rest-service";

const apiService = new RestService();

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
                                        <h2 className="main-color">Рекомендованные курсы</h2>
                                        <hr/>
                                        <h4>Предложите сотруднику одну или несколько программ для переквалификации, на Ваш выбор.</h4>
                                        <h4>Сотрудник получит письмо с Вашими рекомендациями и сможет приступить к переквалификации самостоятельно.</h4>
                                        <br/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="main-left-course">
                        <table className="table table-light">
                            <thead>
                            <tr>
                                <th scope="col">Курс</th>
                                <th scope="col">Действие</th>
                            </tr>
                            </thead>
                            {this.state.courses.map((r) => <Course cells={r}/>)}
                            <div>
                                <button
                                    className="btn btn-outline-primary button-custom-course"
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
