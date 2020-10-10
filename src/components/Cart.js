import React from 'react'
import {fetchUserCart} from '../actions'
import {connect} from 'react-redux'

class Cart extends React.Component{

    componentDidMount=()=>{
        this.props.fetchUserCart()
    }
    render(){
        console.log(this.props.items)

        return(
            <div>Cart????</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        items: state.cart
    }
}
export default connect(mapStateToProps,{fetchUserCart})(Cart)