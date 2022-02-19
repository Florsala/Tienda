import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import Categories from "../data/Categories";

import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

//import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    
  },
  NavLinks: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "3",
    alignItems: "baseline",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.125rem",
  },

  category: {
    display: "flex",
    fontSize: "1rem",
    textTransform: "uppercase",
  }
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <div className="NavBar ">
        <AppBar>
          <Toolbar>
            <Typography variant="h5" className={classes.logo}>
              <Link className="Logo" to="/">
                TurisTienda
                <span>
                  <AcUnitIcon className="snowFlake" />
                </span>
              </Link>
            </Typography>

            <Typography className="NavOptions">
              <div className={classes.NavLinks}>
                

                <Link to="/Excursiones" className={classes.link}>
                  Excursiones
                </Link>

                <div className={classes.category}>
                  {Categories.map((category) => {
                    return (
                      <div key={category.id} >
                        <NavLink to={category.address} activeclassname="active">
                          {category.name}

                        </NavLink>
                      </div>
                    );
                  })}
                </div>

               
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
