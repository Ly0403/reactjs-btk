import { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { fetchFromBackend } from "./helpers";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import CartList from "./CartList";
import { Routes, Route } from "react-router-dom";
import FormComponent from "./FormComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catInfo: {
        title: "Category List",
        colors: this.colors,
        currentCategory: "",
        currentCatId: 0,
      },
      proInfo: {
        title: "Product List",
        colors: this.productColors,
        products: [],
      },
      cartInfo: {
        items: [],
      },
    };
  }

  colors = ["success", "info", "primary", "secondary", "warning", "danger"];
  productColors = [
    "table-success",
    "table-info",
    "table-primary",
    "table-secondary",
    "table-warning",
    "table-danger",
  ];

  setCurrentCat = (category) => {
    this.setState({
      catInfo: {
        title: "Category List",
        currentCategory: category.categoryName,
        colors: this.colors,
        currentCatId: category.id,
      },
    });
    this.getProducts();
  };

  addToCart = (product) => {
    const items = this.state.cartInfo.items;
    const index = items.findIndex((v) => v.product === product);
    if (index < 0) {
      items.push({ product, quantity: 1 });
    } else {
      items[index].quantity += 1;
    }
    this.setState({ items });
    alertify.success(product.productName + "was added", 1);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    let url = "products";
    if (this.state.catInfo.currentCatId) {
      url += `?categoryId=${this.state.catInfo.currentCatId}`;
    }
    fetchFromBackend("GET", "", url).then((products) =>
      this.setState({
        proInfo: {
          title: "Product List",
          colors: this.productColors,
          products,
        },
      })
    );
  };

  removeFromCart = (product) => {
    const items = this.state.cartInfo.items.filter(
      (v) => v.product.id !== product.id
    );
    this.setState({ cartInfo: { items } });
    alertify.error(product.productName + "was removed", 1);
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Navi
              items={this.state.cartInfo.items}
              removeFromCart={this.removeFromCart}
            />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                setCurrentCat={this.setCurrentCat}
                info={this.state.catInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      info={this.state.proInfo}
                      catInfo={this.state.catInfo}
                      addToCart={this.addToCart}
                    />
                  }
                  errorElement={<NotFound />}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      items={this.state.cartInfo.items}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                ></Route>
                <Route exact path="/form" element={<FormComponent />}></Route>
                <Route Component={<NotFound />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
