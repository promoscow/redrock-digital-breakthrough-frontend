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
            <tr onClick={this.onChoose}>
                <th scope="row">{this.state.courses.name}</th>
                <td>
                    <button
                        className="btn-secondary"
                        onClick={this.onSubmit}>
                        Предложить
                    </button>
                </td>
            </tr>
            </tbody>
        );
    }
}
