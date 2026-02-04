import React from 'react';
import workspaceImg from '../../ExternalLink/images/workspace.png';
import '../styles/HeaderImage.css';

function HeaderImage() {
  return (
    <div className="header-image-container">
      <img src={workspaceImg} className="header-image" alt="workspace" />
      <div className="header-overlay"></div>
    </div>
  );
}

export default HeaderImage;
