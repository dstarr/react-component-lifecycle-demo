import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LifecycleMethodsContainer from "./LifecycleMethodsContainer";

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<LifecycleMethodsContainer />, node1);
}