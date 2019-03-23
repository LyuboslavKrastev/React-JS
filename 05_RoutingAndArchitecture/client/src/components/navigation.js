import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <div className="menu">
        <Link to='/home'>Home </Link>
        <Link to='/add'>Add some stuff </Link>
        <Link to='/all'>View all stuff </Link>

    </div>
)
 
export default Navigation