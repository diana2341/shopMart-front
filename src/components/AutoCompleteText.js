import React from 'react'
import { connect } from 'react-redux';
import {onTextChanged} from '../actions/index'

class AutoCompleteText extends React.Component{
    render(){
        return(
            <>
            <input 
            value={this.props.autoText}
             onChange={(event) => {
                this.props.onTextChanged(
                  this.props.products,
                  event.target.value
                );
              }}
            className='search' type='text' placeholder='Search...'/>
            <ul>
        {this.props.products.map(item=><li>{item.name}</li>)}
            </ul>
            </>
        )
    }
}
const mapStateToProps = (state) => {
	return {
        products: state.products.filteredProducts,
        suggestions: state.products.products.suggestions,
        autoText: state.products.products.autoText,



	};
};

export default connect(mapStateToProps,{onTextChanged})(AutoCompleteText);
