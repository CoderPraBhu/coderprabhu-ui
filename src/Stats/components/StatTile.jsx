import React from 'react';
import '../styles/Stats.css';

function StatTile(props) {
  return (
    <div className="stat-tile">
      <span className="stat-tile-value">{props.value}</span>
      <span className="stat-tile-label">{props.label}</span>
    </div>
  );
}

export default StatTile;
