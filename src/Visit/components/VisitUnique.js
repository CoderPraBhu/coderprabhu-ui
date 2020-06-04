import React from 'react';
import axios from 'axios';
import '../../App.css';

export default class VisitUnique extends React.Component {
  state = {
    uniqueVisitorCount: 0
  }
  componentDidMount(){
  // axios.get(`http://localhost:8080/unique`)
  axios.get(`https://api.coderprabhu.com/unique`)
       .then(response => {
        console.log(response);
        console.log(response.data);
        var uniqueVisitorCount = response.data;
        this.setState({uniqueVisitorCount});
      })
  }
  render(){
    return (
      <label >Unique visitors: {this.state.uniqueVisitorCount} </label>
    )
  }
}