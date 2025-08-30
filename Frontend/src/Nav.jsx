import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css";

export const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate =useNavigate();
  const auth =JSON.parse(localStorage.getItem("user"));

   const logout = () => {
    localStorage.clear();
    navigate("/sign");
  };

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
      {/* <Link to="/login"><p>Login</p></Link> */}
      <Link to="/register"><p>Register</p></Link>

{auth ?(<> <div className="profile-nav">
              <div className="nav-profile-pic">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s" alt="" /> */}
                 <img src={`http://localhost:5000${auth.imageUrl}`} alt="" />
              </div>
              {/* Optional: show username if available */}
              <div className="nav-profile-name" style={{color:"gray"}}>{auth.name}</div>
            </div>
      <button className="login-btn" onClick={logout}>Logout</button></>) :(
        <> <Link to="/login"><p>Login</p></Link></>
      )}




     

    </div>
  );
};
