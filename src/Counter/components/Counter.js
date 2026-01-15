import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class Counter extends React.Component {
  state = {
    count: "0"
  }
  componentDidMount(){
   axios.get(`${API_ROOT}/count`)
       .then(response => {
        const count = response.data;
        this.setState({ count });
      })
       .catch(error => {
        console.error('Failed to fetch count:', error.message);
      })
  }
  render(){
    return (
      <div className="stat-tile">
        <span className="stat-tile-value">{this.state.count}</span>
        <span className="stat-tile-label">Total Visits</span>
      </div>
    )
  }
}