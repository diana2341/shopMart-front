import React from 'react'
import {fetchProducts} from '../actions/index'
import {connect} from 'react-redux'

class Home extends React.Component{
componentDidMount(){
   this.props.fetchProducts()
}
renderProducts=()=>{
    return this.props.products.map(product=>{
    return(<div key={product.id}>{product.category}</div>)
    })
}
    render(){
        return(
            <div>Home?</div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{ products:Object.values(state.products)}

}

export default connect(mapStateToProps,{fetchProducts})(Home) 