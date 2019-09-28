import React, {Component} from 'react';
import PersonToQuit from "../person-to-quit";

import './persons-to-quit-list.css';

export default class PersonsToQuitList extends Component {

    state = {
        persons: this.props.props
    };

    render() {
        console.log("state: ", this.state.persons);

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
                            <th scope="col">Должность</th>
                            <th scope="col">Действие</th>
                        </tr>
                        </thead>
                        {this.state.persons.map((r) => <PersonToQuit cells={r}/>)}
                    </table>
                </div>
            </div>
        );
    }
}
