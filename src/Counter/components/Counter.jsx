import React from 'react';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class Counter extends React.Component {
  state = {
    count: "0"
  }
  componentDidMount(){
    fetch(`${API_ROOT}/count`)
      .then(response => response.json())
      .then(count => {
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