import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import NavFilter from './NavFilter'
import { fetchCategory } from '../actions/index';

import '../App.css'
import {BiShoppingBag} from 'react-icons/bi'
import logo from '../img/LogoMakr_4bjfzb.png'
import {MdKeyboardArrowLeft} from 'react-icons/md'

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
        console.log('class',e.target.className)
        if(window.innerWidth <1000 && e.target.className==='home'|| e.target.className.baseVal==='home arrow one' ){
            document.querySelector('.navLinks').style.right='-100%'
            this.setState({active:!this.state.active})
        }
        if(window.innerWidth < 1000 && e.target.className !=='home' && e.target.className.baseVal !=='home arrow one' && e.target.className.baseVal !==''){
            this.renderList(e)
            document.querySelector('.dropdown-menu').style.display='flex'
            document.querySelector('.search').style.display = 'none'
            document.querySelectorAll('.all').forEach(all=>all.style.setProperty('display', 'flex', 'important'))
        }
        if(e.target.className === 'all'){
            document.querySelector('.dropdown-menu').style.display='none'
            document.querySelector('.search').style.display = 'block'
            document.querySelectorAll('.all').forEach(all=>all.style.setProperty('display', 'none', 'important'))
        }
    }
    
    renderList=(e)=>{
        if(e.target.id==='women'){
        document.getElementById('lingerie').style.display='block'
        document.getElementById('beauty').style.display='block'
        document.getElementById('hair').style.display='block'

        document.getElementById('hats').style.display='none'
        document.getElementById('cologne').style.display='none'
        document.getElementById('bags').style.display='none'

        document.getElementById('kids-menu').style.display='none'
        document.getElementById('adults').style.display='block'



        }
        if(e.target.id==='men'){
            document.getElementById('hats').style.display='block'
            document.getElementById('cologne').style.display='block'
            document.getElementById('bags').style.display='block'
            document.getElementById('lingerie').style.display='none'
            document.getElementById('beauty').style.display='none'
            document.getElementById('hair').style.display='none'
    
            document.getElementById('kids-menu').style.display='none'
            document.getElementById('adults').style.display='block'


    
            }
         if(e.target.id==='kids'){
            document.getElementById('kids-menu').style.display='block'

            document.getElementById('adults').style.display='none'
        
           
    
            }
    }
  
    handleSideNav=()=>{
        if(window.innerWidth < 1000){
            console.log('kkkk')
        }
    }
   

render(){
    console.log(this.props.currentUser.user)
    return(
        <>
        <nav>
        <div className='logo'><Link to='/'><img  className='logoImg' src={logo}/></Link></div>
        <ul className='navLinks' >
           <li onClick={this.handleSelect} className='all'><MdKeyboardArrowLeft onClick={this.handleSelect} className='all' siz={30}/> All</li>
        <li><input className='search' type='text' placeholder='Search...'/></li> 
        
        <li onClick={this.handleSelect} className='home'><Link className='home' to='/'> <MdKeyboardArrowLeft onClick={this.handleSelect} className='home arrow one' size={35}/>Home </Link></li> 
        <div className='right-menu two'>

        <li onClick={window.innerWidth > 1000?()=>this.props.fetchCategory('women'):this.handleSelect} onMouseOver={this.renderList}id='women'className='menu-button women'><Link to=''/> <MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow two' size={35}/>Women </li> 
        <li onClick={window.innerWidth > 1000?()=>this.props.fetchCategory('men')  :this.handleSelect}   onMouseOver={this.renderList}id='men'className='menu-button men'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow three' size={35}/>Men</li> 
        <li onClick={window.innerWidth > 1000?()=>this.props.fetchCategory('kids') :this.handleSelect}   onMouseOver={this.renderList}id='kids'className='menu-button kids'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow four' size={35}/>Kids</li> 

        {/* <li onClick={this.handleSelect} onMouseOver={this.renderList}id='women'className='menu-button women'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow two' size={35}/> Women </li> 
        <li onClick={this.handleSelect} onMouseOver={this.renderList}id='men'className='menu-button men'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow three' size={35}/> Men  </li> 
        <li onClick={this.handleSelect} onMouseOver={this.renderList}id='kids'className='menu-button kids'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow four' size={35}/> Kids  </li>  */}
        
        <div className='dropdown-menu two'>
            {/* you can change anything form here */}
        <ul id='adults'>
            <label>
            <b>Clothing</b>
            <li>Tops</li>
            <li>Jackets & Outerwear</li>
            <li>Jeans</li>
            <li>SportsWear</li>
            <li id='lingerie'>Lingerie & Sleep</li>  
            </label>       
            <label><b>Shoes & Accessories</b>
            <li>Jewerly</li>
            {/* women */}
            <li id='hair'>Hair Accessories</li>
            <li id='beauty'>Beauty</li>
            {/* women */}

            {/* men */}
            <li id='hats'>Hats & Beanies</li>
            <li id='bags'>Bags</li>
            <li id='cologne'>Cologne</li>
            {/* men */}
            <li>Shoes</li>
            <li>Socks</li>
            </label>     
        </ul>


        <ul id='kids-menu'>
            <label>
            <b>Boys</b>
            <li>Tops</li>
            <li>Jackets & Outerwear</li>
            <li>Jeans</li>
            <li>SportsWear</li>
            <li>Shoes</li>
            <li>Socks</li>
            <li >Toys</li>
            <li>Hats & Beanies</li>
            </label> 

            <label><b>Girls</b>
            <li>Tops</li>
            <li>Jackets & Outerwear</li>
            <li>Jeans</li>
            <li>SportsWear</li>
            <li>Dresses</li>
            <li>Jewerly</li>
            <li >Hair Accessories</li>
            <li >Bags</li>
            <li >Toys</li>
            <li>Shoes</li>
            <li>Socks</li>
            </label>     
        </ul>


        </div>
        </div>
        {this.props.currentUser.user?
        <>
        <div className='right-menu'>
        <li className='menu-button'><MdKeyboardArrowLeft className='arrow five' size={35}/> Hello {this.props.currentUser.user.first_name} </li>
        <div className='dropdown-menu'>

        <li >Edit Profile</li>

        <li>WishList</li>

        <li  onClick={this.handleLogOut}>Log Out</li>
        </div>
        </div>
        </>
        : 
        <li><Link to='/login'>Login</Link></li>} 
        <li className='cart'><Link to='/cart'><MdKeyboardArrowLeft className='arrow six' size={35}/> <BiShoppingBag size={22}/> </Link></li> 
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






const mapStateToProps = (state) => {
	return { currentUser: state.auth };
};

export default connect(mapStateToProps, { signOut,fetchCategory })(Navabar);
