import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct,orders} from '../actions/index'
import {addCart} from '../actions/index'
import CursorZoom from 'react-cursor-zoom';



class ProductPage extends React.Component{
    componentDidMount(){
        console.log('product pagsss')
        this.props.fetchProduct(this.props.routerProps.match.params.id)
    }
    renderProduct=(user)=>{
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
        <button className='check-btn' onClick={()=>{this.props.addCart(user,this.props.products,1);  this.props.orders()}}>add to cart</button>
    </div>
  

    


    </div>
    
    :<h1>Error</h1>
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

export default connect(mapStateToProps,{fetchProduct,addCart,orders})(ProductPage)