import React from 'react';

import ExternalLink from './ExternalLink.js';
import LogoImages from '../constants/LogoImages.js'

import '../styles/ExternalLink.css';

function GithubLink(props) {
  return (
    <div >
      
        <ExternalLink description = {props.description}  link = {props.link} logo = {LogoImages.github}/>
    </div>
  );
}

export default GithubLink;
