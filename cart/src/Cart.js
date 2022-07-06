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
   render() {
    const {products} = this.state;
    return (
        <div className="cart">
            
            { products.map( (product)=> {
                return <CartItem product= {product} key = {product.id}/>
            })}
        </div>
    );
   }
}



export default Cart;