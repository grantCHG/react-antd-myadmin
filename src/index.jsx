'use strict';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'react-fastclick';
import indexScss from './sass/index.scss';
import { Provider } from 'react-redux';
import route from './route';
import { Router, hashHistory } from 'react-router';

const { store } = this.props;
if (!this.route) this.route = route;
let main = document.querySelector('#main');
main.setAttribute('class', indexScss.main);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={this.route} history={hashHistory} />
    </Provider>,
    main
);
