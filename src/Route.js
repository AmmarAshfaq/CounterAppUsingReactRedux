import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Counter from './container/counter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Route extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                <Counter />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Route;