import React from 'react'
import {fetchUserCart} from '../actions'
import {connect} from 'react-redux'

class Cart extends React.Component{
    userCart = this.props.user.user?this.props.user.user.current_order:null
    componentDidMount=()=>{
        this.props.fetchUserCart()
    }
    render(){
        let userCart = this.props.user.user?this.props.user.user.current_order:null
        console.log(userCart)
        return(
            <>
            {this.props.items.items?this.props.items.items.map(element => {
                if(element.order_id === userCart){
                    console.log (element)
                }
            }):null}
             <div>Cart????</div>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        items: state.cart,
        user:state.auth
    }
}
export default connect(mapStateToProps,{fetchUserCart})(Cart)