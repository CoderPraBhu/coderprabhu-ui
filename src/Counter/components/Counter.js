import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';

export default class Counter extends React.Component {
  state = {
    count: "0"
  }
  componentDidMount(){
   axios.get(`${API_ROOT}/count`)
       .then(response => {
        console.log(response);
        const count = response.data;
        this.setState({ count });
      })
  }
  render(){
    return (
      <label> Total visits: {this.state.count} </label>
    )
  }
}