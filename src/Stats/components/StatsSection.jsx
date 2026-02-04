import React from 'react';
import '../styles/Stats.css';

function StatsSection(props) {
  return (
    <div className="stats-section">
      <h3 className="stats-section-title">{props.title}</h3>
      <div className="stats-tiles-container">
        {props.children}
      </div>
    </div>
  );
}

export default StatsSection;
