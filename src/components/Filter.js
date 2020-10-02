import React from 'react'
import {searchSize} from '../actions/index'
import {sortProducts} from '../actions/index'


import {connect} from 'react-redux'
class Filter extends React.Component{
    render(){
        return(
            <>
        <div>
            <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
            <div >
            <label>
              {" "}
              Filter Size
              <select
                className="form-control"
                value={this.props.size}
                onChange={(event) => {
                  this.props.searchSize(
                    this.props.products,
                    event.target.value
                  );
                }}
              >
                <option value="">ALL</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </label>
          </div>
          </>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
    size: state.products.products.size,
  });
  export default connect(mapStateToProps, {  searchSize,sortProducts })(
    Filter
  );