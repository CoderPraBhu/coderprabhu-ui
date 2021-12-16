import React from 'react';
import axios from 'axios';
import '../../App.css';
import { API_ROOT } from '../../environments/app-config.js';

export default class Visit extends React.Component {
  state = {
    whois: "Your browser"
  }
  componentDidMount(){
    axios.get(`${API_ROOT}/visit`)
       .then(response => {
        //console.log(response);
        var returnedVal = response.data;
        //console.log(returnedVal);
        var whois = returnedVal.device;
        this.setState({whois});
      })
  }
  render(){
    return (
      <label >You are browsing from: {this.state.whois} </label>
    )
  }
}