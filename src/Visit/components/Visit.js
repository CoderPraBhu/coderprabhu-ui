import React from 'react';
import axios from 'axios';
import '../../App.css';

export default class Visit extends React.Component {
  state = {
    whois: ""
  }
  componentDidMount(){
  // axios.get(`http://localhost:8080/visit`)
    axios.get(`https://api.coderprabhu.com/visit`)
       .then(response => {
        console.log(response);
        var returnedVal = response.data;
        console.log(returnedVal);
        var whois = returnedVal.device;
        this.setState({whois});
      })
  }
  render(){
    return (
      <label >Browser: {this.state.whois} </label>
    )
  }
}