import React from 'react';
import logo from '../../logo.svg';
import '../styles/ReactLogo.css'

export default class ReactLogo extends React.Component {
  render(){
    return (
        <a href="https://coderprabhu.com">
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        
    )
  }
}