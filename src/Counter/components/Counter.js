import React from 'react';
import axios from 'axios';

export default class Counter extends React.Component {
  state = {
    count: ""
  }
  componentDidMount(){
   // axios.get(`https://api.coderprabhu.com`)
    axios.get(`http://localhost:8080/count`)
      .then(response => {
        console.log(response);
        const count = response.data;
        this.setState({ count });
      })
  }
  render(){
    return (
      <label> Count since last restart: {this.state.count} </label>
    )
  }
}