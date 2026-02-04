import React from 'react';
import { API_ROOT } from '../../environments/app-config.js';
import '../../Stats/styles/Stats.css';

export default class HelloMessage extends React.Component {
  state = {
    message: "Hi!"
  }
  componentDidMount(){
    fetch(`${API_ROOT}/hello`)
      .then(response => response.text())
      .then(message => {
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