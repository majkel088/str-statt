import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../pokeball.svg";
import { animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "nav") {
          x.className += " responsive";
        } else {
          x.className = "nav";
        }
    };

    render() {
        return (
            <nav className="nav" id="myTopnav">
                <img src={logo} className="nav-logo" alt="Logo" onClick={this.scrollToTop} />
                <ul className="nav_items">
                    <li><NavLink className="nav_item" activeClassName="activate" exact to="/">Aktualności</NavLink></li>
                    <li><NavLink className="nav_item" activeClassName="activate" to="/pokedex">Pokedex</NavLink></li>
                    <li><NavLink className="nav_item" activeClassName="activate" to="/about">About</NavLink></li>
                </ul>
                <a href="javascript:void(0);" className="icon" onClick={this.myFunction}><i class="fa fa-bars"></i></a>
            </nav>
        );
    }
}
