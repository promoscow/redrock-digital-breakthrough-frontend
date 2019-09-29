import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class PersonToQuit extends Component {

    state = {
        data: this.props.cells
    };

    render() {
        const link = "/jobList?id=" + this.state.data.id;

        return (
            <tbody>
            <tr key={this.state.data.id}>
                <td>{this.state.data.name}</td>
                <td>{this.state.data.profession}</td>
                <td>
                    <Link to={link}><button type="button" className="btn btn-outline-primary">Подобрать вакансии</button></Link>

                </td>
            </tr>
            </tbody>
        );
    }
}
