import React from 'react'
import {searchSize} from '../actions/index'
import {sortByCategory} from '../actions/index'
import history from '../history'

import {sortProducts} from '../actions/index'


import {connect} from 'react-redux'
class Filter extends React.Component{

    render(){
      let currentLocation=history.location.pathname

        return(
            <>
        <div>
          {console.log(history)}
            {/* <label>
            Order by */}
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
              <option value="">Price</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          {/* </label> */}
        </div>
            <div >
            {/* <label> */}
              {" "}
              {/* Filter Size */}
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
                <option >select size</option>
                <option value="">ALL</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            {/* </label> */}
          </div>
          <div>
            {

            currentLocation==='/jackets'||currentLocation==='/shoes'||currentLocation==='spotswear'||currentLocation==='/jeans'?
          <select
                className="form-control"
                value={this.props.categories}
                onChange={(event) => {
                  this.props.sortByCategory(
                    this.props.products,
                    event.target.value
                  );
                }}
              >
                <option >Sort By</option>
                <option value="">ALL</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
                :null}
          </div>
          </>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
    size: state.products.products.size,
    categories: state.products.products.categories,

  });
  export default connect(mapStateToProps, {  searchSize,sortProducts,sortByCategory })(
    Filter
  );