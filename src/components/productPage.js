import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/index'
import {addCart} from '../actions/index'

import Button from '@material-ui/core/Button';


class ProductPage extends React.Component{
    componentDidMount(){
        this.props.fetchProduct(this.props.routerProps.match.params.id)
        console.log('here???!!!')

    }
    renderProduct=(user)=>{
    return this.props.products?
    <div>
     <img className='show-product-pic'src={this.props.products.images}/>
   
    <div className='show-container'>
        <h1 className='show-product-name'>{this.props.products.name}</h1>
        <label >Color: <span>{this.props.products.color}</span></label><br/>
        <label >Size: <p className='show-product-size'>{this.props.products.size}</p></label>
        <h3>{this.props.products.description}</h3>
        <Button variant="contained" onClick={()=>this.props.addCart(user,this.props.products.id)}>add to cart</Button>
    </div>
  

    


    </div>
    
    :null
    }
    render(){
        let user=this.props.currentUser.user

        console.log('show',this.props.currentUser.user)
        return(
            <>
            <div>{this.renderProduct(user)}</div>
            </>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
         products:state.products[ownProps.routerProps.match.params.id],
         currentUser: state.auth
        }

}

export default connect(mapStateToProps,{fetchProduct,addCart})(ProductPage)