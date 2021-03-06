import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct,orders} from '../actions/index'
import {addCart} from '../actions/index'
import CursorZoom from 'react-cursor-zoom';
import {FaCheck} from 'react-icons/fa'
import history from '../history'


class ProductPage extends React.Component{

    state={
        width: 0,
        height: 0
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.routerProps.match.params.id)
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions=()=> {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }





    renderProduct=(user)=>{
    return this.props.products?
    <div className='wholeShow'> 
        <p className='location'> <a href='/'>Home&nbsp;</a> / <a href={`/${this.props.products.categories}`}>&nbsp; {this.props.products.categories}</a></p>
    
    <div className='show-container'>
        <h1 className='show-product-name'>{this.props.products.name}</h1>      
            <h1 className='show-product-price'>
                ${this.props.products.price % 1 === 0?this.props.products.price +'.00':this.props.products.price }
            
            </h1>
            <p style={{textDecoration: 'underline'}}>Free Shipping & Returns</p>
        <br/>
        <label ><strong >Color:</strong> <span className='colo'>{this.props.products.color}</span></label><br/><br/>
        <div style={{backgroundColor: this.props.products.color}}className='box'></div><br/>
        {this.props.products.size===' '?'':this.props.products.size===''?'':
        <label >Size: <br/><br/><p className='show-product-size'>{this.props.products.size}</p></label>
        }
        <br/><br/>
        <label style={{fontWeight: 'bolder',fontSize:16}}>Product Details</label>
        <br/><br/>
        <p>{this.props.products.description}</p>
        <button className='check-btn' id={`productButton ${this.props.products.id}`} onClick={()=>{user===null?history.push('/login'):this.props.addCart(user,this.props.products,1);  this.props.orders();}}>add to bag</button>
        <button className='check-btn added' id={`productAdded ${this.props.products.id}`} ><FaCheck/> added to bag</button>

    </div>
    <span className='show-product-pic'>

     {/* <img className='show-product-pic'src={this.props.products.images}/> */}
    {this.state.width > 1000? <CursorZoom
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
            />: <img className='show-product-pic'src={this.props.products.images} /> }

            {/* <span className='show-product-pic'> */}
               {/* <Zoom
            
                img={this.props.products.images}
                zoomScale={3}
                width={600}
                height={600}
                transitionTime={0.5}

            />   */}
            </span>
    </div>
    
        :<h1>Error</h1>
    }
    render(){
        let user=this.props.currentUser.user

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