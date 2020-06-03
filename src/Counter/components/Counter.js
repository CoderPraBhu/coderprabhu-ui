import React from 'react';
import axios from 'axios';

export default class Counter extends React.Component {
  state = {
    count: ""
  }
  componentDidMount(){
  // axios.get(`http://localhost:8080/count`)
   axios.get(`https://api.coderprabhu.com/count`)
       .then(response => {
        console.log(response);
        const count = response.data;
        this.setState({ count });
      })
  }
  render(){
    return (
      <label> Total visits: {this.state.count} </label>
    )
  }
}