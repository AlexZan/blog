// src/HeaderBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="header-bar">
      <nav className="navbar">
        <div className="nav-spacer"></div> {/* Invisible spacer */}
        <Link to="/" className="home-link">Home</Link>
        <h1 className="blog-title">Alex's Tech Blog</h1>
        <div className="nav-spacer"></div> {/* Invisible spacer */}
      </nav>
    </header>
  );
};

export default HeaderBar;