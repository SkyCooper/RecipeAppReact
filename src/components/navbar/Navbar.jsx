import React from "react";
import { NavLink } from "react-router-dom";
import { LinkDiv, Logo, NavDiv } from "./Navbar.styled";
import defaultImg from "../../assets/default-image.jpg";

const Navbar = () => {
  return (
    <NavDiv>
      <div>
        {/* <Logo src={defaultImg} /> */}
        <h2>Designed by @Cooper</h2>
      </div>
      <LinkDiv>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/SkyCooper?tab=repositories"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to={"/logout"}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </LinkDiv>
    </NavDiv>
  );
};

export default Navbar;
