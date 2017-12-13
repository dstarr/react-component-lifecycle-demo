import React from 'react';
import LifecycleMethods from "../components/LifecycleMethods";
import {Button} from "react-bootstrap";

class LifecycleMethodsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'foo',
            show: true
        }
    }

    toggleDisplayText = () => {
        if(this.state.text === 'foo') {
            this.setState({ text: 'bar' });
        } else
            this.setState({ text: 'foo' });
    };

    toggleMountState  = () => {
        if(this.state.show === true)
            this.setState({ show: false});
        else
            this.setState({ show: true});
    };

    getComponent = () => {
        if (this.state.show)
            return <LifecycleMethods text={this.state.text}/>;

        return null;
    };

    render = () => {

        const divStyle = {
            padding:20,
            margin: 20
        };

        return (
            <div style={divStyle}>
                <Button onClick={this.toggleDisplayText}>Toggle Text</Button>
                {' '}
                <Button onClick={this.toggleMountState}>Toggle Mount Component</Button>

                {this.getComponent()}
            </div>
        );
    };
}

export default LifecycleMethodsContainer