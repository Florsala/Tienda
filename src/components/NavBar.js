import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import Categories from "../data/Categories";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-row-reverse ">
        <div>
          <ul className="listStyle">
            <li>
              <Link to="/">TurisTienda</Link>
            </li>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              
              <Link to="/Excursiones">Excursiones</Link>
            </li>
            <div>
              {Categories.map ((category) => {
                return (
                  <div key= {category.id}>

                    <NavLink to = {category.address}
                    activeclassname="active"
                    >
                      {category.name}
                    </NavLink>
                
                 </div>

                )
              })}

            </div>
            <li>
             
              <Link to="/Servicios">Servicios</Link>
            </li>
            <li>
           
              <Link to="/Contacto">Contacto</Link>
            </li>

           

            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
