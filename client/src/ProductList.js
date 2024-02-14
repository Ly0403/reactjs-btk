import { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h6>{this.props.catInfo.currentCategory}</h6>
        <Table key="aa">
          <thead>
            <tr key="ss">
              <th>Name</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.info.products.map((v) => (
              <tr key={v.id}
                className={
                  this.props.info.colors[v.id % this.props.info.colors.length]
                }
              >
                <td>{v.productName}</td>
                <td>{v.quantityPerUnit}</td>
                <td>{v.unitPrice}</td>
                <td>{v.unitsInStock}</td>
                <td><Button color="success" onClick={()=>this.props.addToCart(v)}>AddtoCart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
