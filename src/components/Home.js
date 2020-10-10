import React from 'react'
import {connect} from 'react-redux'
import { fetchCategory } from '../actions/index';

class Home extends React.Component{

  render(){
    let choices=['shoes','jackets','jeans','sportswear']
    return(
      <div>
        <br/>
       <a href='/'><img className='banner' src={require('../img/logo2.png')}/></a>
       <p className='wow'><i className='w'>WOW!</i> Finds in Store</p>

       <div className='category'>
         {choices.map(choice=>{
          return (
            <>
            <img onClick={()=>this.props.fetchCategory(choice)}className={`choose ${choice}`} src={require(`../img/${choice}.png`)}/>
            </>

          )

         })}
         <p className='b-b'>Shop <span className='w'>Beauty</span> products </p>
   
         <img onClick={()=>this.props.fetchCategory('beauty')}className='beauty banner' src={require(`../img/beauty.png`)}/>



      </div>
  
      
      
      </div>
    )
  }
}
const mapStateToProps = (state) => {
	return {
		products: state.products.filteredProducts,
	};
};
export default connect(mapStateToProps, { fetchCategory })(Home);
