import React, {Component} from 'react';
import './job.css';

export default class Job extends Component {

    render() {

        const width = 53;
        return (
            <div>
                <div className="progress main-progress-center">
                    <div className="progress-bar" role="progressbar" style={{"width": "53%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                        <table className="main-progress-center">
                            <tr>
                                <td className="main-progress digit">
                                    <h2>Java Developer</h2>
                                </td>
                                <td className="main-progress digit">
                                    <h2>53%</h2>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
