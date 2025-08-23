import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
nav
<Link to='/'><p>Home</p></Link>
<Link to='/service'><p>Servive</p></Link>
<Link to='/contact'><p>Contact</p></Link>
<Link to='/login'><p>Login</p></Link>
<Link to='/register'><p>Register</p></Link>

    </div>
  )
}
