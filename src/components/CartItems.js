import React from 'react'
import {fetchProductInCart} from '../actions'
import {connect} from 'react-redux'


class CartItems extends React.Component{
    componentDidMount=()=>{
        this.props.fetchProductInCart(this.props.itemsId)
    }

    render(){
        console.log('pleaseee',this.props.product?this.props.product:null)
        return(
            <>
            {this.props.product?
            <ul className='orderList'>
            <li>
            <div>{<img className='cart-img' src={this.props.product.images}/>}</div>
            <div> <b>{this.props.product.name}</b></div>
            <div>{this.props.product.color}</div>
            <div>{this.props.product.price}</div>
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
        product:state.cart[ownProps.itemsId]
    }
}

export default connect(mapStateToProps,{fetchProductInCart})(CartItems)