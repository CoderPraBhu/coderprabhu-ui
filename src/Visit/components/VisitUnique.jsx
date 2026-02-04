import React from 'react';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class VisitUnique extends React.Component {
  state = {
    uniqueVisitorCount: 0
  }
  componentDidMount(){
    fetch(`${API_ROOT}/unique`)
      .then(response => response.json())
      .then(uniqueVisitorCount => {
        this.setState({ uniqueVisitorCount });
      })
      .catch(error => {
        console.error('Failed to fetch unique visitors:', error.message);
      })
  }
  render(){
    return (
      <div className="stat-tile">
        <span className="stat-tile-value">{this.state.uniqueVisitorCount}</span>
        <span className="stat-tile-label">Unique Visitors</span>
      </div>
    )
  }
}