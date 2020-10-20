import React from 'react'
import { connect } from 'react-redux';
import {onTextChanged} from '../actions/index'
import { fetchNavProducts} from '../actions/index';
import history from '../history'
import { pruductShow } from '../actions/index';


class AutoCompleteText extends React.Component{
    componentDidMount(){
       this.props.fetchNavProducts();
        window.onmouseleave=()=>document.querySelector('.nav-results').style.height='0%'

    }
    state={
        autoText:'',
        suggestions:this.props.navProducts
    }
      handleChange = (event) => {
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
            {/* {       console.log('naavpro',this.props.suggestions) 
} */}
            <input 
            onMouseOver={()=>document.querySelector('.nav-results').style.height='100%'}

            name='autoText'
            value={this.state.autoText}
             onChange={this.handleChange}
            className='search' type='text' placeholder='Search...'/>
            <div className='nav-results'>
{this.state.autoText===''?
<ul className='nav-rec push'>
<li id='rec'>recommended</li>
<li className='resul'onClick={()=>{history.push(`/tops`)}}>Tops</li>
<li className='resul'onClick={()=>{history.push(`/jeans`)}}>Jeans</li>
<li className='resul'onClick={()=>{history.push(`/dresses`)}}>Girls Dresses</li>
<li className='resul'onClick={()=>{history.push(`/shoes`)}}>Shoes</li>

</ul>


:this.state.suggestions.map(item=><ul className='nav-rec'><li onClick={()=>pruductShow(item.id)}key={item.id}>{item.name}</li></ul>)}
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

export default connect(mapStateToProps,{onTextChanged,fetchNavProducts,pruductShow})(AutoCompleteText);
