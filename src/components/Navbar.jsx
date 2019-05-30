import React, { Component } from "react";
import { Link } from "react-router-dom";
import slam from "../SLAM.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark">
        <Link to="/">
          <img
            src={slam}
            alt="store"
            className="navbar-brand"
            style={{ width: 70 }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Apparel
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: transparent;
  border: 2px solid white;
  .nav-link {
    color: grey !important
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .nav-link:hover{
    color: #f27f11 !important;
  }
`;
