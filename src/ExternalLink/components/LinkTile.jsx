import React from 'react';
import '../styles/ExternalLink.css';

function LinkTile(props) {
  return (
    <a
      className="link-tile"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={props.description}
        className="link-tile-icon"
        src={props.logo}
      />
      <span className="link-tile-label">{props.description}</span>
    </a>
  );
}

export default LinkTile;
