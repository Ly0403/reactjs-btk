import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCartInfo() {
    return (
      <Table striped>
        <thead>
          <tr key="trhead1">
            <th>#</th>
            <th>Product Name</th>
            <th>Category Id</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((v) => (
            <tr key={v.product.id}>
              <td>{v.product.id}</td>
              <td>{v.product.productName}</td>
              <td>{v.product.categoryId}</td>
              <td>{v.product.unitPrice}</td>
              <td>{v.product.unitsInStock}</td>
              <td>{v.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(v.product)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCartInfo()}</div>;
  }
}

export default CartList;
