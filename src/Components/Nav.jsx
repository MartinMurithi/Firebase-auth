import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
             <nav>
                <NavLink to={'/signup'} className='navlink'>SignUp</NavLink>
                <NavLink to={'/signin'} className='navlink'>SignIn</NavLink>
                <NavLink to={'/blog'} className='navlink'>Blog</NavLink>
                <NavLink to={'/'} className='navlink'>Home</NavLink>
            </nav>
        </>
  )
}

export default Nav