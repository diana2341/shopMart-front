import React from 'react'

class NavFilter extends React.Component{
    renderForLi=(e)=>{
        return(
            <ul>
            <label>
            <b>Clothing</b>
        <li>Tops</li>
        <li>Jackets & Outerwear</li>
        <li>Jeans</li>
        <li>SportsWear</li>
{e.target===document.getElementById('women')?
<li>Lingerie & Sleep</li>:
e.target===document.getElementById('kids')?
<li>toys</li>:
e.target===document.getElementById('men')?
null:null


}
        

        </label>
       
        
        <label><b>Shoes & Accessories</b>
        <li>Jewerly</li>
        {e.target===document.getElementById('women')?
        
            <>
        <li>Hair Accessories</li>
        <li>Beauty</li>
        </>
        :null
    }
        
        <li>Shoes</li>
        <li>Socks</li>
        </label>
        {/* to hereeeee */}
        </ul>
        )
    }

    render(){
        return(
            <div className='nav-filter'>
                {/* {this.renderForLi(this.props.id)} */}
              
            </div>
        )
    }
}

export default NavFilter