import React from 'react';
import '../../App.css';

//import Logo from '../images/GitHub-Mark-Light-120px-plus.png';

import '../styles/ExternalLink.css';

function ExternalLink(props) {
  return (
    <div >
        <a
          className="App-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            alt='logo' 
            className='github-icon'
            src={props.logo} 
          /> 

          <label>{props.description}</label>
        </a>
    </div>
  );
}

export default ExternalLink;
