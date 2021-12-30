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
            <li>
             
              <Link to="/Servicios">Servicios</Link>
            </li>
            <li>
           
              <Link to="/Contacto">Contacto</Link>
            </li>

            <div>
              {Categories.map ((c) => {
                return (
                  <div key= {c.id}>

                    <NavLink to = {c.address}
                    activeClassName="active"
                    >
                      {c.name}
                    </NavLink>
                
                 </div>

                )
              })}

            </div>

            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
