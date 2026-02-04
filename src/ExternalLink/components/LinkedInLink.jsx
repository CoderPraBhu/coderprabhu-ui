import React from 'react';

import ExternalLink from './ExternalLink.js';
import LogoImages from '../constants/LogoImages.js'
import '../styles/ExternalLink.css';

function LinkedIn(props) {
  return (
    <div >
        <ExternalLink description = {props.description}  link = {props.link} logo = {LogoImages.linkedIn}/>
    </div>
  );
}

export default LinkedIn;
