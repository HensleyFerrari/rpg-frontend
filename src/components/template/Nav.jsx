import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/char">
                <i className="fa fa-user"></i> Personagens
            </Link>
            <hr />
            <Link to="/sistema">
                <i className="fa fa-code"></i> Sistema
            </Link>
            <Link to="/shop">
                <i className="fa fa-shopping-bag"></i> Loja
            </Link>
        </nav>
    </aside>