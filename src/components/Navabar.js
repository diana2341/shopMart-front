import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions'
import NavFilter from './NavFilter'
import { fetchCategory,orders } from '../actions/index';
import { fetchProductsForNav } from '../actions/index';
import AutoCompleteText from '../components/AutoCompleteText'
import '../App.css'
import {BiShoppingBag} from 'react-icons/bi'
import logo from '../img/LogoMakr_4bjfzb.png'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import AutoComplete from './AutoCompleteText'
import history from '../history'

class Navabar extends React.Component{

    state={
        active:false,
        width: 0,
         height: 0
    }


      
      componentDidMount() {
        this.props.orders()
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions=()=> {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
        console.log(e.target.className)
        if(window.innerWidth <1000 && e.target.className==='home'|| e.target.className.baseVal==='home arrow one' || e.target.className === 'cart' ||  e.target.className.baseVal=== 'arrow five'|| e.target.className.baseVal=== 'arrow six'||  e.target.className === 'menu-button' || e.target.className === 'svgBag' || e.target.className.baseVal === 'svgBag' || e.target.className.baseVal === '' || e.target.className === 'logsout' ){
            document.querySelector('.navLinks').style.right='-100%'
            this.setState({active:!this.state.active})
        }
        if(this.state.width < 1000 && e.target.className !=='home' && e.target.className.baseVal !=='home arrow one' && e.target.className !== 'cart'&& e.target.className.baseVal !=='cart'&& e.target.className.baseVal!== 'arrow five'&& e.target.className.baseVal !== 'arrow six' && e.target.className !== 'menu-button' && e.target.className !== 'svgBag' && e.target.className.baseVal !=='' && e.target.className.baseVal !=='svgBag' && e.target.className !== 'menu-button edit' && e.target.className !== 'logsout'){
            this.renderList(e)
            document.querySelector('.dropdown-menu').style.display='flex'
            // document.querySelector('.search').style.display = 'none'
            document.querySelectorAll('.all').forEach(all=>all.style.setProperty('display', 'flex', 'important'))
        }

        if(e.target.className === 'menu-button edit'){
            document.querySelector('.dropdown-menu.edit').style.display='block'
            // document.querySelector('.search').style.display = 'none'
            document.querySelectorAll('.all').forEach(all=>all.style.setProperty('display', 'flex', 'important'))
        }
        if(e.target.className === 'all' || e.target.id === 'alli' || e.target.id === 'arr'){
            document.querySelector('.dropdown-menu').style.display='none'
            
            // document.querySelector('.search').style.display = 'block'
            document.querySelectorAll('.all').forEach(all=>all.style.setProperty('display', 'none', 'important'))
        }

        if(document.querySelector('.dropdown-menu.edit') !== null && document.querySelector('.dropdown-menu.edit') && e.target.className === 'all' || e.target.id === 'alli' || e.target.id === 'arr'){
           return document.querySelector('.dropdown-menu.edit')?document.querySelector('.dropdown-menu.edit').style.display='none':null

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
        <nav id='nav'>
        <div className='logo'><Link to='/'><img  className='logoImg' src={logo}/></Link></div>
        <ul className='navLinks' >
           <li onClick={this.handleSelect} className='all'><div><MdKeyboardArrowLeft onClick={this.handleSelect} id='arr' className='all' siz={45}/></div><div id='alli'>All</div></li>
           {/*  */}
        <li><AutoCompleteText/></li> 
        {/*  */}
        <li onClick={this.handleSelect} className='home'><Link className='home' to='/'> <MdKeyboardArrowLeft onClick={this.handleSelect} className='home arrow one' size={35}/>Home </Link></li> 
        <div className='right-menu two'>

        <li onClick={this.state.width > 1000?()=>this.props.fetchCategory('women'):this.handleSelect} onMouseOver={this.renderList}id='women'className='menu-button women'><Link to=''/> <MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow two' size={35}/>Women </li> 
        <li onClick={this.state.width > 1000?()=>this.props.fetchCategory('men')  :this.handleSelect}   onMouseOver={this.renderList}id='men'className='menu-button men'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow three' size={35}/>Men</li> 
        <li onClick={this.state.width > 1000?()=>this.props.fetchCategory('kids') :this.handleSelect}   onMouseOver={this.renderList}id='kids'className='menu-button kids'><Link to=''/><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow four' size={35}/>Kids</li> 

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
        {this.props.currentUser.user? this.props.currentUser.user.id?
        <>
        <div className='right-menu edit'>
        <li className='menu-button edit' onClick={this.state.width<1000?this.handleSelect:null}><MdKeyboardArrowLeft onClick={this.state.width<1000?this.handleSelect:null} className='arrow five' size={35}/> Hello {this.props.currentUser.user.first_name} </li>
        <div className='dropdown-menu edit'>

        <li onClick={()=>{history.push(`/edit-profile`); this.handleSelect();}} >Edit Profile</li>

        <li>WishList</li>

        <li  onClick={this.handleLogOut}>Log Out</li>
        </div>
        </div>
        </>
        : 
        <li><Link  onClick={this.state.width<1000?this.handleSelect:null} className='logsout' to='/login'>Login</Link></li>:<li><Link onClick={this.state.width<1000?this.handleSelect:null} className='logsout'  to='/login'>Login</Link></li>} 

        <li className='cart' onClick={this.handleSelect}><Link className='svgBag'  onClick={this.handleSelect} to='/cart'><MdKeyboardArrowLeft onClick={this.handleSelect} className='arrow six' size={35}/> <BiShoppingBag className='svgBag' onClick={this.handleSelect} size={22}/>({total >0? total:0}) </Link></li> 
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
    return { currentUser: state.auth,
             cart:state.cart
     };
};

export default connect(mapStateToProps, { signOut,fetchCategory,fetchProductsForNav,orders })(Navabar);
