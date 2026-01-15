import React from 'react';
import profileImg from '../images/profile.jpg';
import '../styles/ProfileHero.css';

function ProfileHero() {
  return (
    <div className="profile-hero">
      <div className="profile-photo-container">
        <img src={profileImg} alt="Prashant Bhuruk" className="profile-photo" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Prashant Bhuruk</h1>
        <h2 className="profile-title">Senior Software Development Engineer</h2>
        <p className="profile-bio">
          14+ years of experience building scalable distributed systems. Currently leading
          cloud migrations and re-architecting authentication services at a major San Francisco
          bank, supporting 4M+ users across 150+ applications. Expertise in Java microservices,
          Spring Boot, and Kubernetes.
        </p>
      </div>
    </div>
  );
}

export default ProfileHero;
