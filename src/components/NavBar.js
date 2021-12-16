
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <nav>
        <div className='flex flex-row-reverse '>
         
        <div>
            <ul className='listStyle'>
            <li><a className='text-orange'>HOME</a></li>

                <li><a className='link' href="#">Catalogo</a></li>
                <li><a className='link' href="#">Servicios</a></li>
                 <li><a className='link' href="#">Tiendas</a></li>
  <CartWidget/>
            </ul>

         
            
        </div> 


                
        </div>            
            
    </nav>
    )
}

export default NavBar
