import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to="/home">Home</Link>
                    </li> &nbsp; &nbsp;
                <li class="nav-item">
                <Link to="/about">About US</Link>
                    </li> &nbsp; &nbsp;
                <li class="nav-item">
                <Link to="/contact">Contact US</Link>
                </li>&nbsp; &nbsp;
                <li class="nav-item">
                <Link to="/hooks">Hook Prac</Link>
                </li>
                &nbsp; &nbsp;
                <li class="nav-item">
                <Link to="/add-emp">Add emp</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Layout