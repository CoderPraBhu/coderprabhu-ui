import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class VisitUnique extends React.Component {
  state = {
    uniqueVisitorCount: 0
  }
  componentDidMount(){
  axios.get(`${API_ROOT}/unique`)
       .then(response => {
        var uniqueVisitorCount = response.data;
        this.setState({uniqueVisitorCount});
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