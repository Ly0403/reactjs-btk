import { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
export default class Cart extends Component {
  renderCart = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - <Badge color="danger">{this.props.items.length}</Badge>
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.items.map((v) => (
            <DropdownItem key={v.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(v.product)}
              >
                X
              </Badge>
              {v.product.productName}-{" "}
              <Badge color="success">{v.quantity}</Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  render() {
    return <div>{this.props.items.length > 0 ? this.renderCart() : <></>}</div>;
  }
}
