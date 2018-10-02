import React, { Component } from 'react';
import { API_ROOT } from '../../services/_utils/api-config';
import Axios from 'axios';


class MainPage extends Component<{}, {}> {
  public state = {
    response: ''
  };

  public componentDidMount() {
    this.getString();
  }

  public render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          {this.state.response}
        </p>
      </div>
    )
  }

  private getString() {
    Axios
      .get(
        `${API_ROOT}/accounts/api/v1/hello`,
        { headers: { 'Access-Control-Allow-Origin': true } }
      ).then((response: any) => {
        this.setState({ response: response.data });
      })
  }
}

export default MainPage;