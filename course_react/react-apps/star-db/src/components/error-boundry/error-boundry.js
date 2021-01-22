import React, {Component} from 'react';

import './error-boundry.css';
import Errorindicator from '../error-indicator';


export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };
    

    componentDidCatch() {
        debugger;
        this.setState({
            hasError: true
        });
    }

    render() {
        
        if (this.state.hasError) {
            return <Errorindicator />
        }

        return this.props.children;
    }
};