import React from "react";
// import CartItem from "./CartItems";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 99,
          title: "watch",
          qty: 4,
          img: "",
          id: 2,
        },
      ],
    };
  }
  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
    }
    this.setState({
      products,
    });
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          IncreaseQty={this.handleIncreaseQty}
          DecreaseQty={this.handleDecreaseQty}
          Delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
