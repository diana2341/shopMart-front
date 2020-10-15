import React from 'react'
import { connect } from 'react-redux';
import {onTextChanged} from '../actions/index'
import { fetchNavProducts} from '../actions/index';
import history from '../history'

class AutoCompleteText extends React.Component{
    componentDidMount(){
       this.props.fetchNavProducts();
        console.log('napro',this.props.suggestions) 

    }
    state={
        autoText:'',
        suggestions:this.props.navProducts
    }
      handleChange = (event) => {
    console.log(event.target.value);
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    // Filter the array stored in data, but never update it. 
    // Update filtered instead.
    return this.setState({suggestions: this.props.navProducts.filter(data => data.name.toLowerCase().startsWith(event.target.value.toLowerCase()))})
  }
    render(){
        return(
            <>
            {       console.log('naavpro',this.props.suggestions) 
}
            <input 
            name='autoText'
            value={this.state.autoText}
             onChange={this.handleChange}
            className='search' type='text' placeholder='Search...'/>
            <div className='nav-results'>
{this.state.autoText===''?
<ul className='nav-rec push'>
<li id='rec'>recommended</li>
<li onClick={()=>{history.push(`/tops`)}}>Tops</li>
<li onClick={()=>{history.push(`/jeans`)}}>Jeans</li>
<li onClick={()=>{history.push(`/dresses`)}}>Girls Dresses</li>
<li onClick={()=>{history.push(`/shoes`)}}>Shoes</li>

</ul>


:this.state.suggestions.map(item=><ul className='nav-rec'><li key={item.id}>{item.name}</li></ul>)}
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
	return {
        navProducts: state.products.navProducts,
        suggestions: state.products.navProducts,
        autoText: state.products.autoText,



	};
};

export default connect(mapStateToProps,{onTextChanged,fetchNavProducts})(AutoCompleteText);
