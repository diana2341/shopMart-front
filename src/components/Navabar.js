import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import NavFilter from './NavFilter'
import { fetchCategory,orders } from '../actions/index';
import { fetchProductsForNav } from '../actions/index';

import '../App.css'
import {BiShoppingBag} from 'react-icons/bi'
import logo from '../img/LogoMakr_4bjfzb.png'
import {MdKeyboardArrowLeft} from 'react-icons/md'

class Navabar extends React.Component{

    state={
        active:false
    }

    componentDidMount=()=>{
        this.props.orders()
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
    category=undefined
    renderList=(e)=>{
        if(e.target.id==='women'){
            this.category='women'
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
            this.category='men'

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
        }
    }
   

render(){
    let userId = this.props.currentUser.user? this.props.currentUser.user.id : null
    let totalAmount = this.props.cart.order? this.props.cart.order.filter((o)=>{
        if(o.user_id === userId){
        return (o.total_qty)
    }}):null
    let total = totalAmount?totalAmount.map(order=>order.total_qty):null
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
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'tops')}>Tops</li>
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'jackets')}>Jackets & Outerwear</li>
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'jeans')}>Jeans</li>
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'sportswear')}>SportsWear</li>
            <li onClick={()=>this.props.fetchProductsForNav('women','sleep')}id='lingerie'>Lingerie & Sleep</li>  
            </label>       
            <label><b>Shoes & Accessories</b>
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'jewlery')}>Jewerly</li>
            {/* women */}
            <li onClick={()=>this.props.fetchProductsForNav('women','hair')}id='hair'>Hair Accessories</li>
            <li onClick={()=>this.props.fetchProductsForNav('women','beauty')}id='beauty'>Beauty</li>
            {/* women */}

            {/* men */}
            <li onClick={()=>this.props.fetchProductsForNav('men','hats')}id='hats'>Hats & Beanies</li>
            <li onClick={()=>this.props.fetchProductsForNav('men','bags')}id='bags'>Bags</li>
            <li onClick={()=>this.props.fetchProductsForNav('men','cologne')}id='cologne'>Cologne</li>
            {/* men */}
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'shoes')}>Shoes</li>
            <li onClick={()=>this.props.fetchProductsForNav(this.category,'socks')}>Socks</li>
            </label>     
        </ul>


        <ul id='kids-menu'>
            <label>
            <b>Boys</b>
            <li onClick={()=>this.props.fetchProductsForNav('boys','tops')}>Tops</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','jackets')}>Jackets & Outerwear</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','jeans')}>Jeans</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','sportswear')}>SportsWear</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','shoes')}>Shoes</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','socks')}>Socks</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','toys')}>Toys</li>
            <li onClick={()=>this.props.fetchProductsForNav('boys','hats')}>Hats & Beanies</li>
            </label> 

            <label><b>Girls</b>
            <li onClick={()=>this.props.fetchProductsForNav('girls','tops')}>Tops</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','jackets')}>Jackets & Outerwear</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','jeans')}>Jeans</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','sportswear')}>SportsWear</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','dresses')}>Dresses</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','jewlery')}>Jewerly</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','hair')} >Hair Accessories</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','bags')} >Bags</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','toys')} >Toys</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','shoes')}>Shoes</li>
            <li onClick={()=>this.props.fetchProductsForNav('girls','socks')}>Socks</li>
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
        <li className='cart'><Link to='/cart'><MdKeyboardArrowLeft className='arrow six' size={35}/> <BiShoppingBag size={22}/>({total >0? total:0}) </Link></li> 
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
	return { currentUser: state.auth,cart:state.cart };
};

export default connect(mapStateToProps, { signOut,fetchCategory,fetchProductsForNav,orders })(Navabar);
