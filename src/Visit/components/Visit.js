import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class Visit extends React.Component {
  state = {
    whois: "Your browser"
  }
  componentDidMount(){
    axios.get(`${API_ROOT}/visit`)
       .then(response => {
        var returnedVal = response.data;
        var whois = returnedVal.device;
        this.setState({whois});
      })
       .catch(error => {
        console.error('Failed to fetch visit info:', error.message);
      })
  }
  render(){
    return (
      <div className="stat-tile">
        <span className="stat-tile-value">{this.state.whois}</span>
        <span className="stat-tile-label">Your Device</span>
      </div>
    )
  }
}