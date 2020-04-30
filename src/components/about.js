import React from 'react';
import Section from "./section";
import raidy from "./raidy";
import pvp from "./pvp";
import field_res from "./field-res";
import { Link, animateScroll as scroll } from "react-scroll";


const About = (props) => (
    <div className="container">
        <nav className="nav_pvp">
                <ul className="nav-items-pvp">
                    <li className="nav-item-pvp">
                        <Link activeClass="active" to="raidy" spy={true} smooth={true} offset={-70} duration={500} >
                        Raidy
                        </Link>
                    </li>
                    <li className="nav-item-pvp">
                        <Link activeClass="active" to="pvp" spy={true} smooth={true} offset={-70} duration={500} >
                        PVP
                        </Link>
                    </li>
                    <li className="nav-item-pvp">
                        <Link activeClass="active" to="field-res" spy={true} smooth={true} offset={-70}  duration={500}  >
                        Field Research
                        </Link>
                    </li>
                </ul>
        </nav>
        <Section title="Raidy"  subtitle={raidy} dark={true} id="raidy" />
        <Section title="PVP" subtitle={pvp} dark={false} id="pvp" />
        <Section title="Field Reaserch" subtitle={field_res} dark={true} id="field-res" />
    </div>
);

export default About;