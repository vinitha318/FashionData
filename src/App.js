import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from './components/GridListExampleSimple';
import CardExampleWithAvatar from './components/CardExampleWithAvatar';
//import RaisedButton from 'material-ui/RaisedButton';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <MuiThemeProvider>


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fashion Data</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <GridListExampleSimple />
        <CardExampleWithAvatar />
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
