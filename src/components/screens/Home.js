import React, { Component } from 'react';
import { Content } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Login from './Login';

class Home extends Component {

    onButtonPress() {
        this.props.setLoading(true);
        setTimeout(() => {
            this.props.setLoading(false);
        }, 2000);
    }

    render() {
        return (
            <Content style={{ margin: 10 }}>
                <Login />
            </Content>
        );
    }
}

export default connect(null, actions)(Home);
