import React, {Component} from 'react';
import './job.css';
import {Link} from "react-router-dom";

export default class Job extends Component {

    state = {
        data: this.props.cells
    };

    render() {
        const widthStyle = {
            width: 500
        };
        const width = "\"width\": \"" + this.state.data.percentage + "%\"";
        const name = this.state.data.name + ": ";
        const percentage = this.state.data.percentage + "%";

        const link = "/courses?query=" + this.state.data.keyWord;

        return (
            <div>
                {/*<Link to={link}>*/}
                {/*<table>*/}
                {/*    <tr>*/}
                {/*        <td className="main-progress digit">*/}
                {/*            <h2>{name}</h2>*/}
                {/*        </td>*/}
                {/*        <td className="main-progress digit">*/}
                {/*            <h2>{percentage}</h2>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*</table>*/}
                {/*</Link>*/}
                <Link to={link}>
                    <div className="progress main-progress-center">
                        <div className="progress-bar" role="progressbar" style={{width}}
                             aria-valuenow={this.state.data.percentage}
                             aria-valuemin="0" aria-valuemax="100">
                            <table className="main-progress-center">
                                <tr>
                                    <td className="main-progress digit">
                                        <h2>{name}</h2>
                                    </td>
                                    <td className="main-progress digit">
                                        <h2>{percentage}</h2>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
