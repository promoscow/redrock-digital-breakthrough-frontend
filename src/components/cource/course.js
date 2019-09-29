import React, {Component} from 'react';

import './course.css';

export default class Course extends Component {

    state = {
        courses: this.props.cells
    };

    render() {

        console.log("course: ", this.state.courses);

        return (
            <tbody>
            <tr key={this.state.courses.name} onClick={this.onChoose}>
                <td>{this.state.courses.name}</td>
                <td>
                    <button
                        className="btn btn-outline-primary"
                        onClick={this.onSubmit}>
                        Предложить
                    </button>
                </td>
            </tr>
            </tbody>
        );
    }
}
