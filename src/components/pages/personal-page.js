import React, {Component} from 'react';

export default class PersonalPage extends Component {

    render() {
        return (
            <div className="main-left">
                <h3>Данные пользователя</h3><br></br>
                <table className="table table-hover">
                    <tbody>
                    <tr className="table-light">
                        <th scope="row">ID</th>
                        <td>1</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">Имя</th>
                        <td>Вячеслав</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">Фамилия</th>
                        <td>Чернышов</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">Логин</th>
                        <td>slava123</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">Пароль</th>
                        <td>123123</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">e-mail</th>
                        <td>slava_rossii@list.ru</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
