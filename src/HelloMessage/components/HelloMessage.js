import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class HelloMessage extends React.Component {
  state = {
    message: "Hi!"
  }
  componentDidMount(){
    axios.get(`${API_ROOT}/hello`)
      .then(response => {
        const message = response.data;
        this.setState({ message });
      })
      .catch(error => {
        console.error('Failed to fetch message:', error.message);
      })
  }
  render(){
    return (
      <div className="stat-tile">
        <span className="stat-tile-value">{this.state.message}</span>
        <span className="stat-tile-label">API Message</span>
      </div>
    )
  }
}