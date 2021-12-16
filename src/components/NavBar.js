
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <nav>
        <div className='flex flex-row-reverse '>
         
        <div>
            <ul className='listStyle'>
            <li><a href="#top" className='link'>HOME</a></li>

                <li><a className='link' href="#top">Catalogo</a></li>
                <li><a className='link' href="#top">Servicios</a></li>
                 <li><a className='link' href="#top">Tiendas</a></li>
  <CartWidget/>
            </ul>

         
            
        </div> 


                
        </div>            
            
    </nav>
    )
}

export default NavBar
