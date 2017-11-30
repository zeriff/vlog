import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import App from './src/App';

class AppRoot extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Container>
                    <App />
                </Container>
            </Provider>
        );
    }

}

export default AppRoot;
