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
          img: "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",
          id: 1,
        },
        {
          price: 99,
          title: "watch",
          qty: 4,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
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

  getCartTotal = () => {
    const { products } = this.state;
    let cardTotal = 0;

    products.map((product) => {
      cardTotal = cardTotal + product.qty * product.price;
    });
    return cardTotal;
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
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
