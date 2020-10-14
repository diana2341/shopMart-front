import React from 'react'
import {fetchUserCart,fetchProduct,orders} from '../actions'
import {connect} from 'react-redux'
import CartItems from './CartItems'
class Cart extends React.Component{
   

    componentDidMount=()=>{
        this.props.fetchUserCart()
        this.props.orders()
    }
    render(){
        let userCart = this.props.user.user?this.props.user.user.id:null
        let user = this.props.user.user?this.props.user.user.id:null
        let total = this.props.items.order?this.props.items.order.filter((order)=>{
            if(order.user_id === user){
                return order
            }
        }):null
        let total2 = total?total[0]:null
        let actualTotal = total2?total2.total_price:null
        return(
            <>
            <div className='totalCart'>
                <h2>Order Summary</h2>
                <ul>
                <li>Subtotal</li>
                <li>Discount</li>
                <li>Shipping</li>
                <li><h1>Total:</h1></li>
                </ul>

                <ul>
                    <li>${actualTotal}</li>
                    <li>$0.00</li>
                    <li>FREE</li>
                    <li><h1>${actualTotal}</h1></li>
                </ul>
                <button>CHECKOUT</button>
            </div>

            <h1 className='mybag'><b>My Bag</b></h1>
            {this.props.items.items?this.props.items.items.map(element => {
                if(element.user_id === userCart){
                   
                 return <CartItems key={element.id} quantity={element.quantity} orderId={element.id} itemsId={element.product_id}/>

                 
                }
            }):null}


            
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        items: state.cart,
        user:state.auth,
        product:state.products,
    }
}
export default connect(mapStateToProps,{fetchUserCart,fetchProduct,orders})(Cart)