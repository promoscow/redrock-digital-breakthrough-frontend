import React, {Component} from 'react';
import person from '../../resources/thumb-up-outline.png';
import {NavigationBar} from './index';

export default class AfterRegisterPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="main">
                    <img src={person}/><br/><br/>
                    <h3>Спасибо.</h3>
                    <h3>Мы отправили Ваши рекомендации сотруднику.</h3>
                </div>
            </div>
        )
    }
}
