import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../../../tercera entrega/src/components/CartWidget'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>MAO Shop</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/products">Productos</Link></li>
                <li><Link className="menu-link" to="/products/Almacen">Almacen</Link></li>
                <li><Link className="menu-link" to="/products/Bebidas">Bebidas</Link></li>
                <li><Link className="menu-link" to="/aboutus">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contact">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar