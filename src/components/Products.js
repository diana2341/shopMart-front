import React from 'react';
import { fetchProducts } from '../actions/index';
import { pruductShow } from '../actions/index';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import history from '../history'



class Product extends React.Component {
	componentDidMount() {
		this.props.fetchProducts(this.props.routerProps.match.params.product);
		console.log(this.props.routerProps)

	}

	renderProducts = () => {
		

		return this.props.products.map((product) => {
			return (
				<React.Fragment key={product.id}>
					<div  onClick={()=>pruductShow(product.id)} className='card'  >
					
					{/* <div > */}
					<img className='card-image'src={product.images}/>
					{/* </div> */}
					<div className='card-content'>
					<div className=''>{product.name}</div>
					<div className='card-text'>${product.price % 1 === 0?product.price +'.00': product.price}</div>
					
					<div className='btn-row'>
					<button
					className='btn-shop add'
					>+ add to bag</button>
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
	
				

				<div className="row">{this.renderProducts()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products.filteredProducts,
	};
};

export default connect(mapStateToProps, { fetchProducts, pruductShow })(Product);
