import React, { useState,useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button
} from "reactstrap";
import { CartContext } from "../../CartContext";
import {NavLink} from "react-router-dom";

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {value, setValue} = useContext(CartContext)
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ractjs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/produk" className="nav-link">
                Produk
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/mahasiswa" className="nav-link">
                Mahasiswa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hookskelas" className="nav-link">
                HookClass
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hooksfunc" className="nav-link">
                HookFunc
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/useeffect" className="nav-link">
                UseEffect
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/usecontext" className="nav-link">
                useContext
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="danger">
              <i className="fa fa-shopping-cart"></i>
              <span className="badge badge-light ml-2">{value}</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
