import React from "react";
const CartItem = (props) => {
  // constructor () {
  //     super();
  //     this.state = {
  //         price : 9999,
  //         title : "Mobile Phone",
  //         qty : 1,
  //         // img : ''
  //     }
  // }

  // increaseQty() {
  //     // console.log(this.state);

  //     // this.setState({ //type 1
  //     //     qty: this.state.qty +1
  //     // })

  //     this.setState((prevState) => {
  //         return {
  //             qty: prevState.qty + 1
  //         }
  //     })
  // }

  // decreaseQty() {
  //     this.setState((prevState) => {
  //         if(prevState.qty === 0){
  //             return {
  //                 qty: prevState.qty
  //             }
  //         }
  //         return {
  //          qty: prevState.qty -1
  //         }

  //     })
  // }

  const { price, title, qty } = props.product;
  const { Delete, DecreaseQty, product } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={style.image} src={product.img} alt="" />
      </div>
      <div className="right-block">
        <div
          style={{
            fontSize: 25,
          }}
        >
          {" "}
          {title}{" "}
        </div>{" "}
        <div
          style={{
            color: "#777",
          }}
        >
          {" "}
          Rs {price}{" "}
        </div>{" "}
        <div
          style={{
            color: "#777",
          }}
        >
          {" "}
          Qty: {qty}{" "}
        </div>{" "}
        <div className=".cart-item-actions">
          {" "}
          {/* Buttons */}{" "}
          <img
            alt="increase"
            className="action-icons"
            src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
            onClick={() => props.IncreaseQty(props.product)}
          />{" "}
          <img
            alt="decrease"
            className="action-icons"
            src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            onClick={() => DecreaseQty(product)}
          ></img>{" "}
          <img
            alt="delete"
            className="action-icons"
            src="https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"
            onClick={() => Delete(product.id)}
          ></img>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
    background: "#ccc",
  },
};

export default CartItem;
