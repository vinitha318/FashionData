import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from './components/GridListExampleSimple';
import CardExampleWithAvatar from './components/CardExampleWithAvatar';
import BrandsRenderer from './components/BrandsRenderer';
import DesignersRenderer from './components/DesignersRenderer';
//import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

        </p>
        <BrowserRouter>
          <Switch>
            <Route path="/app/:appId" component={CardExampleWithAvatar} />
            <Route path="/brands" component={BrandsRenderer} />
            <Route path="/designers" component={DesignersRenderer} />
            <Route component={GridListExampleSimple }/>
          </Switch>
        </BrowserRouter>

      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
