import './Logo.css'
import logo from '../../assets/imgs/resident.png'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>