import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/about">About US</Link>
                    </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact US</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/hooks">Hook Prac</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/add-emp">Add emp</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/reducer">Use Reducer</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/handle-form">Handle Form </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Layout