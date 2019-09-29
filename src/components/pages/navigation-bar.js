import React, {Component} from 'react';

export default class NavigationBar extends Component {


    render() {
        return (
            <div>
                {/*<div className="main-title"><h3>SmartOne</h3></div>*/}

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/"><h2 className="title-padding">SmartOne</h2></a>
                </nav>
            </div>
        );
    }

};
