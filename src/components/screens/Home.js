import React, { Component } from 'react';
import { Button, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
                <Button
                    iconLeft
                    onPress={this.onButtonPress.bind(this)}
                >
                    <Icon name='beer' />
                    <Text>Beer</Text>
                </Button>
            </Content>
        );
    }
}

export default connect(null, actions)(Home);
