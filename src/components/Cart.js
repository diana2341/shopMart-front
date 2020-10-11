import React from 'react'
import {fetchUserCart,fetchProduct} from '../actions'
import {connect} from 'react-redux'
import CartItems from './CartItems'
class Cart extends React.Component{
    userCart = this.props.user.user?this.props.user.user.current_order:null
    id = null

    componentDidMount=()=>{
        this.props.fetchUserCart()
    }
    single=null
    render(){
        let userCart = this.props.user.user?this.props.user.user.current_order:null
        console.log('...k',this.single)
        return(
            <>
            <h1 className='mybag'><b>My Bag</b></h1>
            {this.props.items.items?this.props.items.items.map(element => {
                if(element.order_id === userCart){
                    console.log(element)
                 return <CartItems itemsId={element.product_id}/>

                //  this.props.fetchProduct(element.product_id) 
                // this.props.fetchProduct(element.product_id) 
                 
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
        product:state.products
    }
}
export default connect(mapStateToProps,{fetchUserCart,fetchProduct})(Cart)