import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubLink from './ExternalLink/components/GithubLink.js';
import TwitterLink from './ExternalLink/components/TwitterLink.js';
import LinkedInLink from './ExternalLink/components/LinkedInLink';
import HelloMessage from './HelloMessage/components/HelloMessage';
import Counter from './Counter/components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GithubLink description = "All projects" link= "https://github.com/CoderPraBhu"/>
        <GithubLink description = "UI" link= "https://github.com/CoderPraBhu/coderprabhu-ui"/>
        <GithubLink description = "API" link= "https://github.com/CoderPraBhu/coderprabhu-api"/>
        <GithubLink description = "K8S" link= "https://github.com/CoderPraBhu/coderprabhu-k8s"/>
        <TwitterLink description = "Twitter" link= "https://twitter.com/CoderPraBhu"/>
        <LinkedInLink description = "LinkedIn" link= "https://linkedin.com/in/prashantbhuruk"/>
        <Counter/>
        <HelloMessage/>
       </header>
    </div>
  );
}

export default App;
