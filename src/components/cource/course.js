import React, {Component} from 'react';

import './course.css';
import {Link} from "react-router-dom";

export default class Course extends Component {

    state = {
        courses: this.props.cells
    };

    render() {

        console.log("course: ", this.state.courses);
        const link = "/after";

        return (
            <tbody>
            <tr key={this.state.courses.name} onClick={this.onChoose}>
                <td>{this.state.courses.name}</td>
                <td>
                    <Link to={link}><button
                        className="btn btn-outline-primary"
                        onClick={this.onSubmit}>
                        Предложить
                    </button></Link>
                </td>
            </tr>
            </tbody>
        );
    }
}
