import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

export const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // you can navigate or filter data here
  };

  return (
    <div className="navbar"> 

       <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Website Logo" />
        </Link>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}     
        /> 
     </form>

      <Link to="/"><p>Home</p></Link>
      <Link to="/service"><p>Service</p></Link>
      <Link to="/contact"><p>Contact</p></Link>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Register</p></Link>
    </div>
  );
};
