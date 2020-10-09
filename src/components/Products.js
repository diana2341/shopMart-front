import React from 'react';
import { fetchProducts } from '../actions/index';
import { pruductShow } from '../actions/index';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Product extends React.Component {
	componentDidMount() {
		this.props.fetchProducts(this.props.routerProps.match.params.product);
		
	}
	renderProducts = () => {
		

		return this.props.products.map((product) => {
			return (
				<React.Fragment key={product.id}>
					<div className='card'  >
					
					{/* <div > */}
					<img className='card-image'src={product.images}/>
					{/* </div> */}
					<div className='card-content'>
					<div className=''>{product.name}</div>
					<div className='card-text'>${product.price}</div>
					<div className='btn-row'>
						
					<button
					className='btn-shop'
					>add to cart</button>
					<button
					className='btn-shop'
					onClick={()=>pruductShow(product.id)}>
					
					see details
					</button>	
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
