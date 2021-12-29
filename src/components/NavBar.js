
import React from 'react'
import CartWidget from './CartWidget'
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav>
        <div className='flex flex-row-reverse '>
         
        <div>
            <ul className='listStyle'>

                
            <li><Link to="/">HOME</Link></li> {" "}
            <li> <Link to= "/Excursiones">Catalogo</Link></li> {" "}
            <li> <Link to= "/Servicios">Servicios</Link></li>
            <li> <Link to= "/Contacto">Tiendas</Link></li>
                
  <CartWidget/>
            </ul>

         
            
        </div> 


                
        </div>            
            
    </nav>
    )
}

export default NavBar
