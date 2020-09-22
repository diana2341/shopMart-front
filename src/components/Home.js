import React from 'react'
import {fetchProducts} from '../actions/index'
import {connect} from 'react-redux'

class Home extends React.Component{
componentDidMount(){
   this.props.fetchProducts()
}
renderProducts=()=>{
    return this.props.products.map(product=>{
    return(<div key={product.id}>{product.categories}</div>)
    })
}
    render(){
        return(
        <div>{this.renderProducts()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{ products:Object.values(state.products)}

}

export default connect(mapStateToProps,{fetchProducts})(Home) 