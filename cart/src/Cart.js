import React from "react";
import CartItem from "./CartItems";
class Cart extends React.Component {

    constructor () {
        super();
        this.state = {
           products: [
            {
            price : 9999,
            title : "Mobile Phone",
            qty : 1,
            img : '',
            id:1
            },
            {
                price : 99,
                title : "watch",
                qty : 4,
                img : '',
                id: 2
            }
           ]
        }
    }
    handleIncreaseQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products
        }) 
    }

    handleDecreaseQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty > 0) {
            products[index].qty -= 1;
        }
        this.setState({
            products
        })
    }
   render() {
    const {products} = this.state;
    return (
        <div className="cart">
            
            { products.map( (product)=> {
                return (
                    <CartItem 
                        product= {product} 
                        key = {product.id}
                        IncreaseQty = {this.handleIncreaseQty}
                        DecreaseQty = {this.handleDecreaseQty}
                        />
                )
            })}
        </div>
    );
   }
}



export default Cart;