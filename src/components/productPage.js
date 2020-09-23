import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/index'

class ProductPage extends React.Component{
    componentDidMount(){
        this.props.fetchProduct(this.props.routerProps.match.params.id)
    }
    renderProduct=()=>{
    return this.props.products?
    <>
    <h1>{this.props.products.name}</h1>
    <img src={this.props.products.images}/>
    <hr/>
    <p>{this.props.products.color}</p>
    <p>{this.props.products.size}</p>
    <h3>{this.props.products.description}</h3>
    


    </>
    
    :null
    }
    render(){
        return(
            <>
            <div>{this.renderProduct()}</div>
            </>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{ products:state.products[ownProps.routerProps.match.params.id]}

}
export default connect(mapStateToProps,{fetchProduct})(ProductPage)