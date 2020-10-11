import React from 'react'
import {fetchProductInCart,deleteItem,orders} from '../actions'
import {connect} from 'react-redux'


class CartItems extends React.Component{
    componentDidMount=()=>{
        this.props.fetchProductInCart(this.props.itemsId)
        this.props.orders()
    }

    render(){
        // console.log('the user',this.props.currentUser?this.props.currentUser.user.id:null)
        // console.log('the order',this.props.carts.order)
       
       
        return(
            <>
            {this.props.product?
            <ul className='orderList'>
            <li>
            <button className='delete' onClick={()=>this.props.deleteItem(this.props.orderId)}>X</button>

            <div>{<img className='cart-img' src={this.props.product.images}/>}</div>
            <div className='cartItem name'> <b>{this.props.product.name}</b></div>
            <div className='cartItem color'>{this.props.product.color}</div>
            <div className='cartItem price'>${this.props.product.price}</div>
            </li>
           <hr/>
            </ul>
            
            :
            'Cart is Empty'}
          </>
            
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        product:state.cart[ownProps.itemsId],
        currentUser: state.auth,
        carts:state.cart
    }
}

export default connect(mapStateToProps,{fetchProductInCart,deleteItem,orders})(CartItems)