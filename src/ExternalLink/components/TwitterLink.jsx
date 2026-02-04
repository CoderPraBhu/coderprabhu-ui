import React from 'react';

import ExternalLink from './ExternalLink.js';
import LogoImages from '../constants/LogoImages.js'
import '../styles/ExternalLink.css';

function TwitterLink(props) {
  return (
    <div >
        <ExternalLink description = {props.description}  link = {props.link} logo = {LogoImages.twitter}/>
    </div>
  );
}

export default TwitterLink;
