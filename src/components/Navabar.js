import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import '../App.css'
import {BiShoppingBag} from 'react-icons/bi'
class Navabar extends React.Component{

    handleLogOut=()=>{
        this.props.signOut()
    }
render(){
    console.log(this.props.currentUser.user)
    return(
        <nav>
            <h3 className='logo'>ShopMart</h3>
        <ul className='navLinks'>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to=''/>Women</li> 
        <li><Link to=''/>Men</li> 
        <li><Link to=''/>Kids</li> 

        <li><Link to='/cart'><BiShoppingBag size={22}/></Link></li> 

        {this.props.currentUser.user?
        <>
        <li>Hello {this.props.currentUser.user.first_name}</li>
        <li onClick={this.handleLogOut}>Log Out</li>
        </>
        : 
        <li><Link to='/login'>Login</Link></li>} 
        
        </ul>
        </nav>
    )
}
}

const mapStateToProps=(state)=>{
    return ({currentUser:state.auth})
}


export default connect(mapStateToProps,{signOut})(Navabar)