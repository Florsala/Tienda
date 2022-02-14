import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import Categories from "../data/Categories";

import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';


//import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(  ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    display: "flex",
  },
  NavLinks: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "3",
    
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <div className="NavBar ">
        <AppBar>
          <Toolbar>
            
            <Typography variant="h5" className={classes.logo}>
              <Link className="Logo" to="/">TurisTienda
              <span>
                <AcUnitIcon className="snowFlake"/>
              </span>
              
              </Link>
            </Typography>

            <Typography className="NavOptions">
              <div className={classes.NavLinks}>
                
                 <Link to="/" className={classes.link}>
                  Inicio
                </Link> 

                <Link to="/Excursiones" className={classes.link}>
                  Excursiones
                </Link>

                <div>
                  {Categories.map((category) => {
                    return (
                      <div key={category.id}>
                        <NavLink to={category.address} activeclassname="active">
                          {category.name}
                        </NavLink>
                      </div>
                    );
                  })}
                </div>

                <Link to="/Antartida" className={classes.link}>Antártida</Link>

                <Link to="/Contacto" className={classes.link}>Contacto</Link>

                
              </div>
            </Typography>
            <CartWidget />
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};

export default NavBar;
