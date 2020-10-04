import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import NavFilter from './NavFilter'
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
        if(!this.state.active ){
            this.setState({active:!this.state.active})
            document.querySelector('.navLinks').style.right='0'
        }else{
            this.setState({active:!this.state.active})

            document.querySelector('.navLinks').style.right='-100%'
        }
    
    }
    handleSelect=(e)=>{
    
        if(e.target.className==='home'|| e.target.className.baseVal==='home arrow one' ){
            document.querySelector('.navLinks').style.right='-100%'
            this.setState({active:!this.state.active})
        }
    }
  
render(){
    console.log(this.props.currentUser.user)
    return(
        <>
        <nav>
        <div className='logo'><Link to='/'><img  className='logoImg' src={logo}/></Link></div>
        <ul className='navLinks' >
        <li><input className='search' type='text' placeholder='Search...'/></li> 
        
        <li onClick={this.handleSelect} className='home'><Link className='home' to='/'>Home <IoIosArrowForward size={30} className='home arrow one'/></Link></li> 
        <div className='right-menu two'>

        <li  className='menu-button women'><Link to=''/>Women  <IoIosArrowForward size={30} className='arrow two'/></li> 
        <li  className='menu-button men'><Link to=''/>Men  <IoIosArrowForward size={30} className='arrow three'/></li> 
        <li  className='menu-button kids'><Link to=''/>Kids  <IoIosArrowForward size={30} className='arrow four'/></li> 
        
        <div className='dropdown-menu two'>
            {/* you can change anything form here */}
        <ul>
            <label>
            <b>Clothing</b>
        <li>Tops</li>
        <li>Jackets & Outerwear</li>
        <li>Jeans</li>
        <li>SportsWear</li>
        <li>Lingerie & Sleep</li>

        </label>
       
        
        <label><b>Shoes & Accessories</b>
        <li>Jewerly</li>
        <li>Hair Accessories</li>
        <li>Beauty</li>
        <li>Shoes</li>
        <li>Socks</li>
        </label>
        {/* to hereeeee */}
        </ul>
        </div>
        </div>
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
    </>
    )
  }
}






const mapStateToProps=(state)=>{
    return ({currentUser:state.auth})
}


export default connect(mapStateToProps,{signOut})(Navabar)