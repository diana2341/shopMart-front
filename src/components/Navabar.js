import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import '../App.css'
import {BiShoppingBag} from 'react-icons/bi'
import logo from '../img/LogoMakr_4bjfzb.png'
import {IoIosArrowForward} from 'react-icons/io'

class Navabar extends React.Component{

    state={
        active:false
    }

    handleLogOut=()=>{
        this.props.signOut()
    }
    toggle=()=>{
        this.setState({active:!this.state.active})
    }
render(){
    console.log(this.props.currentUser.user)
    return(
        <nav>
        <div className='logo'><Link to='/'><img  className='logoImg' src={logo}/></Link></div>
        <ul className={this.state.active?'navLinks nav-active':'navLinks'} >
        <li><input className='search' type='text' placeholder='Search...'/></li> 
        <li><Link to='/'>Home <IoIosArrowForward size={30} className='arrow one'/></Link></li> 
        <li><Link to=''/>Women  <IoIosArrowForward size={30} className='arrow two'/></li> 
        <li><Link to=''/>Men  <IoIosArrowForward size={30} className='arrow three'/></li> 
        <li><Link to=''/>Kids  <IoIosArrowForward size={30} className='arrow four'/></li> 


        {this.props.currentUser.user?
        <>
        <div className='right-menu'>
        <li className='menu-button'>Hello {this.props.currentUser.user.first_name} <IoIosArrowForward size={30} className='arrow five'/></li>
        <div className='dropdown-menu'>

        <li >Edit Profile</li>

        <li>WishList</li>

        <li  onClick={this.handleLogOut}>Log Out</li>
        </div>
        </div>
        </>
        : 
        <li><Link to='/login'>Login</Link></li>} 
        <li><Link to='/cart'><BiShoppingBag size={22}/> <IoIosArrowForward size={30} className='arrow six'/></Link></li> 
        </ul>

            <div onClick={this.toggle}  className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}
}

const mapStateToProps=(state)=>{
    return ({currentUser:state.auth})
}


export default connect(mapStateToProps,{signOut})(Navabar)