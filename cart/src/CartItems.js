import React from "react";
class CartItem extends React.Component {

    constructor (){
        super();
        this.state = {
            price : 9999,
            title : "Mobile Phone",
            qty : 1,
            img : ''
        }
    }

    render () {
        const {price, title, qty, img} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>Rs {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className=".cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"></img>
                        <img alt="decrease" className="action-icons" src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"></img>
                        <img alt="delete" className="action-icons" src="https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        background: '#ccc'
    }
}

export default CartItem;