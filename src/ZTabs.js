import React, { Component } from 'react';
import { Root, Tab, Tabs, Text } from 'native-base';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Nav from './components/Nav';
import Home from './components/screens/Home';

class ZTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }

    renderTabBar() {
        return (
            <View />
        );
    }

    render() {
        return (
            <Root>
                <StatusBar
                    animated
                    barStyle="light-content"
                    hidden
                />
                <Tabs
                    initialPage={this.state.currentPage}
                    ref={(v) => { this.tabView = v; }}
                    renderTabBar={this.renderTabBar}
                    onChangeTab={(p) => this.setState({ currentPage: p.i })}
                >
                    <Tab heading="1">
                        <Text>DISCOVER</Text>
                    </Tab>
                    <Tab heading="2"><Home /></Tab>
                    <Tab heading="3">
                        <Text>PROFILE</Text>
                    </Tab>
                </Tabs>

                <Nav onChange={(page) => this.tabView.goToPage(page)} currentPage={this.state.currentPage} />

                <Spinner
                    color='#3F51B5'
                    cancelable
                    visible={this.props.loading}
                />
            </Root>
        );
    }

}


const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps)(ZTabs);
