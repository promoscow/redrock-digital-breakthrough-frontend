import React, {Component} from 'react';

import './course.css';

export default class Course extends Component {
    render() {
        return (
            <tr onClick={this.onChoose}>
                <th scope="row">Java разработка с нуля и до профи</th>
                <td>53%</td>
                <td>
                    <button
                        className="btn-secondary"
                        onClick={this.onSubmit}>
                        Предложить
                    </button>
                </td>
            </tr>
        );
    }
}
