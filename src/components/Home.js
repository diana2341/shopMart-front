import React from 'react'

class Home extends React.Component{

  render(){
    let choices=['shoes','sweaters','jeans','sports']
    return(
      <div>
        <br/>
       <img className='banner' src={require('../img/logo2.png')}/>
       <p className='wow'><i className='w'>WOW!</i> Finds in Store</p>

       <div className='category'>
         {choices.map(choice=>{
          return (
            <>
            <img className={`choose ${choice}`} src={require(`../img/${choice}.png`)}/>
            </>

          )

         })}
         <p className='b-b'>Shop <span className='w'>Beauty</span> products </p>
   
         <img className='beauty banner' src={require(`../img/beauty.png`)}/>



      </div>
  
      
      
      </div>
    )
  }
}

export default Home