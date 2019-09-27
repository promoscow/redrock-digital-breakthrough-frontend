import React, {Component} from 'react';

export default class PersonToQuit extends Component {

    onChoose = () => {
        this.props.history.push(`/personToQuit`)
    };

    render() {
        return (
            <tr onClick={this.onChoose}>
                <th scope="row">Иванов И. И.</th>
                <td>Бухгалтерской мути</td>
                <td>Компьютерный червь</td>
            </tr>
        );
    }
}
