// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: green500,
        // primary2Color: green700,
        // primary3Color: green100
    }
}, {
    avatar: {
        borderColor: null
    }
});


export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet
          link={[{
            rel: 'icon', href: '/favicon.png'
          }]}
        />
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
            <Navbar />
            { this.props.children }
            <Footer />
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
