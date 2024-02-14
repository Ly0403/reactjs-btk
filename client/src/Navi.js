import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        {" "}
        <Navbar>
          <NavbarBrand href="/">LyOfficial App</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/form">Form</Link>
              </NavItem>
              <NavItem>
                <Link to="/cart">Go to Cart</Link>
              </NavItem>
              <Cart
                items={this.props.items}
                removeFromCart={this.props.removeFromCart}
              ></Cart>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
