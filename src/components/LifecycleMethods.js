import React from 'react';
import PropTypes from 'prop-types';

class LifecycleMethods extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor');
    }

    componentWillMount = () => { console.log('componentWillMount'); };

    componentDidMount = () => { console.log('componentDidMount'); };

    componentWillReceiveProps = () => { console.log('componentWillReceiveProps'); };

    componentWillUpdate = () => { console.log('componentWillUpdate'); };

    componentDidUpdate = () => { console.log('componentDidUpdate'); };

    componentWillUnmount = () => { console.log('componentWillUnmount'); };

    componentDidCatch = (error, errorInfo) => { console.log('componentDidCatch'); };

    // shouldComponentUpdate = () => { console.log('shouldComponentUpdate'); return false; };

    render = () => {

        console.log('render');

        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    };
}

LifecycleMethods.PropTypes = {
    text: PropTypes.string.required
};

export default LifecycleMethods;