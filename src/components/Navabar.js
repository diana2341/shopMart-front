import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import '../App.css'
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
       
        {this.props.currentUser.user?
        <>
        <li>Hello {this.props.currentUser.user.first_name}</li>
        <li onClick={this.handleLogOut}>Log Out</li>
        </>
        : 
        <li><Link to='/login'>Login</Link></li>} 
        
        <li><Link to='/cart'>Cart</Link></li> 
        <li><Link to=''/></li> 
        </ul>
        </nav>
    )
}
}

const mapStateToProps=(state)=>{
    return ({currentUser:state.auth})
}


export default connect(mapStateToProps,{signOut})(Navabar)