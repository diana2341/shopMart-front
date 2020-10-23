import React from 'react';
import { fetchProducts,addCart,orders } from '../actions/index';
import { pruductShow } from '../actions/index';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import history from '../history'
import {FaCheck} from 'react-icons/fa'
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";



class Product extends React.Component {
	state={
		loading:true
	}

	constructor(props){
		 super(props);
		this.addedButton = React.createRef();
		
    }


	componentDidMount() {
		this.props.fetchProducts(this.props.routerProps.match.params.product)
		.then(this.setState({loading:false	}))

	}




	renderProducts = (user) => {
		

		return this.props.products.map((product) => {
			return (
				<React.Fragment key={product.id}>
					<div className='card'  >
					
					{/* <div > */}
					<img onClick={()=>pruductShow(product.id)}   className='card-image'src={product.images}/>
					{/* </div> */}
					<div className='card-content'>
					<div className=''>{product.name}</div>
					<div className='card-text'>${product.price % 1 === 0?product.price +'.00': product.price}</div>
					
					<div className='btn-row'>
						
					<button className='btn-shop add'  id={`button ${product.id}`} onClick={()=>{user===null?history.push('/login'):this.props.addCart(user,product, 1);  this.props.orders(); }}>+ add to bag</button>
					<button ref={this.addedButton} id={`added ${product.id}`} className='btn-shop added'><FaCheck/> Added To Bag</button>
					{/* <button
					className='btn-shop details'
					onClick={()=>pruductShow(product.id)}>
					
					see details
					</button>	 */}
					</div>
					
					</div>
					</div>
				</React.Fragment>
			);
		});
	};



	render() {
		const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

		let user=this.props.currentUser.user ? this.props.currentUser.user:null
		return (
			<div>
				<br/>
				{this.props.routerProps.match.params.product==='women'?
				<img className='banner' src={require('../img/womens.png')}/>:
				this.props.routerProps.match.params.product==='men'?
				<img className='banner' src={require('../img/Men.png')}/>:
				this.props.routerProps.match.params.product==='kids'?
				<img className='banner' src={require('../img/kids.png')}/>:''
				}
				<br/>
				{this.props.routerProps.match.params.product==='women'?
				<h1 className='title'>Women's clothing & Accessories</h1>:
				this.props.routerProps.match.params.product==='men'?
				<h1 className='title'>men's clothing & Accessories</h1>:
				this.props.routerProps.match.params.product==='kids'?
				<h1 className='title'>kids clothing & Accessories</h1>:''				
				}
				<div className="filter-row">
					<Filter />
				</div>
	
				
{this.state.loading?  
				<div className='loader'>
					<FadeLoader
					css={override}

					size={150}
					color={"#00CCFF"}
					loading={this.state.loading}
				/>
				</div>:
		
				<div className="row">{this.renderProducts(user)}</div>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products.filteredProducts,
		 currentUser: state.auth,
		 location: state.products.location,
		 loading:state.products.loading

	};
};

export default connect(mapStateToProps, { fetchProducts, pruductShow,addCart,orders })(Product);
