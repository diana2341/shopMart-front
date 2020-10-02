import React from 'react'
import {searchProduct} from '../actions/index'

import {connect} from 'react-redux'
class Filter extends React.Component{
    render(){
        return(
            <div className="col-md-4">
            <label>
              {" "}
              Filter Size
              <select
                className="form-control"
                value={this.props.size}
                onChange={(event) => {
                  this.props.searchProduct(
                    this.props.products,
                    event.target.value
                  );
                }}
              >
                <option value="">ALL</option>
                <option value="x">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </label>
          </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
    size: state.products.products.size,
  });
  export default connect(mapStateToProps, {  searchProduct })(
    Filter
  );