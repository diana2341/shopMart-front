import React from 'react'
import {fetchProducts} from '../actions/index'
import {pruductShow} from '../actions/index'
import Filter from '../components/Filter'
import {connect} from 'react-redux'




class Home extends React.Component{

 
componentDidMount(){
   this.props.fetchProducts()
  
}
renderProducts=()=>{
  
    
    

    return this.props.products.map(product=>{

    return(
    <React.Fragment key={product.id}>

  <div className='card'  >
    <div className=''>{product.name}</div>
    <div className='card-image'>
      <img src={product.images}/>
    </div>
    <div className='card-content'>
      <div className='card-text'>${product.price}</div>
      <button>add to cart</button>
      <button         
      onClick={()=>pruductShow(product.id)}>
      see details
      </button>
    </div>
   </div>

    </React.Fragment>)
    })
}
    render(){
        return(
          
        <div >
          <div className='filter-row'>
            <Filter/>
          </div>
          
          <div className='row'>
           {this.renderProducts()} 
          </div>
          

        </div>
        )
    }
}

const mapStateToProps=(state)=>{
   return{
      products:state.products.filteredProducts,


  }

}

export default connect(mapStateToProps,{fetchProducts,pruductShow})(Home) 