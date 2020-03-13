import React from 'react';
import axios from 'axios';

export default class HelloMessage extends React.Component {
  state = {
    message: ""
  }
  componentDidMount(){
   // axios.get(`https://api.coderprabhu.com`)
    axios.get(`http://localhost:8080/hello`)
      .then(response => {
        console.log(response);
        const message = response.data;
        this.setState({ message });
      })
  }
  render(){
    return (
      <label>Api says: {this.state.message} </label>
    )
  }
}