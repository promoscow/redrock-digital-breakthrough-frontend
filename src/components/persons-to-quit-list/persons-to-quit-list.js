import React, {Component} from 'react';
import PersonToQuit from "../person-to-quit";

import './persons-to-quit-list.css';

export default class PersonsToQuitList extends Component {

    render() {
        return (
            <div>
                <div className="main-left-persons">
                    <h2>Кандидаты на увольнение</h2>
                </div>
                <div className="main-left-persons">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Ф.И.О</th>
                            <th scope="col">Управление</th>
                            <th scope="col">Должность</th>
                        </tr>
                        </thead>
                        <tbody>
                        <PersonToQuit/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
