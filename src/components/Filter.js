import React, { Component } from "react";
import { connect } from "react-redux";
import { searchProduct} from "../actions/productActions";

class Filter extends Component {
  render() {
    return (
     
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
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.products,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
});
export default connect(mapStateToProps, { searchProduct})(
  Filter
);