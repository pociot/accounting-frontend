import * as React from 'react';
import './App.css';

import Axios from 'axios';
import logo from './logo.svg';

class App extends React.Component<any, any> {
  public state = {
    response: ''
  };

  public componentDidMount() {
    this.getString();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { this.state.response }
        </p>
      </div>
    );
  }

  private getString() {
    Axios
      .get(
        "https://accounting-backend-kpociot.herokuapp.com/hello",
        { headers: { 'crossOrigin': true }}
      )
      .then((response) => {
        this.setState({ response: response.data });
      })
  }
}

export default App;
