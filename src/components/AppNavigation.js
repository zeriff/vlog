import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import VerticalViewPager from 'react-native-vertical-view-pager';
import Menu from './assets/Menu';
import Home from './screens/Home';

const { width, height } = Dimensions.get('window');

const styles = {
    page_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: height - 20
    }
};

const Profile = () => {
    return (
        <View><Text>PROFILE</Text></View>
    );
};
const Discover = () => {
    return (<View><Text>Discover</Text></View>);
};

const SubMenu = () => {
    return (
        <VerticalViewPager
            showsVerticalScrollIndicator={false}>
            <View style={[styles.page_container, { backgroundColor: 'pink' }]}>
                <Text>Page1: Open up App.js to start working on your app!</Text>
            </View>
            <Home />
            <View style={[styles.page_container, { backgroundColor: 'lightblue' }]}>
                <Text>Page3: Shake your phone to open the developer menu.</Text>
            </View>
        </VerticalViewPager>
    );
};

const AppNavigation = () => {
    return (
        <Menu
            routes={[
                { Component: Discover },
                { Component: SubMenu },
                { Component: Profile },
            ]}
        />
    );
}

export default AppNavigation;
