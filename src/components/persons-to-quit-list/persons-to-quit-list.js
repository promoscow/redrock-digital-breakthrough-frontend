import React, {Component} from 'react';
import PersonToQuit from "../person-to-quit";

import './persons-to-quit-list.css';
import person from '../../resources/account-alert-outline_blue.png';

export default class PersonsToQuitList extends Component {

    state = {
        persons: this.props.props
    };

    render() {
        console.log("state: ", this.state.persons);

        return (
            <div>
                <div className="main-left-persons">
                    <table>
                        <tr>
                            <td>
                                <img src={person}/>
                            </td>
                            <td>
                                <div className="main-left-title">
                                    <br/>
                                    <h2 className="main-color">Кандидаты на сокращение</h2>
                                    <hr/>
                                    <h4>В списке ниже указаны сотрудники, вероятность сокращения которых максимальна ввиду устаревания их профессии. Подберите для них новую профессию, в соответствии с тенденциями на рынке труда.</h4>
                                    <br/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="main-left-persons">
                    <table className="table table-light">
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
