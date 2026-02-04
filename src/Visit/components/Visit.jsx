import React from 'react';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class Visit extends React.Component {
  state = {
    whois: "Your browser"
  }
  componentDidMount(){
    fetch(`${API_ROOT}/visit`)
      .then(response => response.json())
      .then(data => {
        const whois = data.device;
        this.setState({ whois });
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