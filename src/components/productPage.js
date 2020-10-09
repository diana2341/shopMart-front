import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/index'
import {addCart} from '../actions/index'
import CursorZoom from 'react-cursor-zoom';
import Zoom from 'react-img-zoom'

import Button from '@material-ui/core/Button';


class ProductPage extends React.Component{
    componentDidMount(){
        this.props.fetchProduct(this.props.routerProps.match.params.id)
    }
    renderProduct=()=>{
    return this.props.products?
    <div>
    <span className='show-product-pic'>

     {/* <img className='show-product-pic'src={this.props.products.images}/> */}
     <CursorZoom
                image={{
                    className:'show-product-pic',

                    src: this.props.products.images,
                    width: 400,
                    height: 600
                }}
                zoomImage={{
                    src: this.props.products.images,
                    width: 1400,
                    height: 1200
                }}
                cursorOffset={{ x: 10, y: 0 }}
            />
            {/* <span className='show-product-pic'> */}
               {/* <Zoom
            
                img={this.props.products.images}
                zoomScale={3}
                width={600}
                height={600}
                transitionTime={0.5}

            />   */}
            </span>
        <p className='location'> <a href='/'>Home&nbsp;</a> / <a href={`/${this.props.products.categories}`}>&nbsp; {this.props.products.categories}</a></p>
    
    <div className='show-container'>
        <h1 className='show-product-name'>{this.props.products.name}</h1>      
            <h1 className='show-product-name'>
                ${this.props.products.price % 1 === 0?this.props.products.price +'.00':this.props.products.price }
            
            </h1>
            <p style={{textDecoration: 'underline'}}>Free Shipping & Returns</p>
        <br/>
        <label ><strong >Color:</strong> <span>{this.props.products.color}</span></label><br/><br/>
        <div style={{backgroundColor: this.props.products.color}}className='box'></div><br/>
        {this.props.products.size===' '?'':this.props.products.size===''?'':
        <label >Size: <br/><br/><p className='show-product-size'>{this.props.products.size}</p></label>
        }
        <br/><br/>
        <label style={{fontWeight: 'bolder',fontSize:16}}>Product Details</label>
        <br/><br/>
        <p>{this.props.products.description}</p>
        <button className='check-btn' onClick={()=>addCart(10,this.props.products.id)}>add to cart</button>
    </div>
  

    


    </div>
    
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
export default connect(mapStateToProps,{fetchProduct,addCart})(ProductPage)