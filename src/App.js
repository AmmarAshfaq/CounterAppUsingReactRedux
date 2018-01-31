import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from './Route';
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Route />
            </Provider>
        )
    }
}
export default App;