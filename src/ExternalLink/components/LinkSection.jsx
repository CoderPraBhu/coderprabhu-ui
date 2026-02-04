import React from 'react';
import '../styles/ExternalLink.css';

function LinkSection(props) {
  return (
    <div className="link-section">
      <h3 className="link-section-title">{props.title}</h3>
      <div className="link-tiles-container">
        {props.children}
      </div>
    </div>
  );
}

export default LinkSection;
