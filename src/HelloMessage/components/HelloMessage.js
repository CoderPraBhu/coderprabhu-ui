import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';

export default class HelloMessage extends React.Component {
  state = {
    message: "Hi!"
  }
  componentDidMount(){
    axios.get(`${API_ROOT}/hello`)
      .then(response => {
        console.log(response);
        const message = response.data;
        this.setState({ message });
      })
  }
  render(){
    return (
      <label>Message from backend api: {this.state.message} </label>
    )
  }
}