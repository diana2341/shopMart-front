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
            <div>
                {<img src={this.props.product.images}/>}
            {this.props.product.price}<br/>
            </div>
            
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