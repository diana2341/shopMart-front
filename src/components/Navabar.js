import React from 'react'
import {Link} from 'react-router-dom'
class Navabar extends React.Component{

render(){
    return(
        <nav>
        <ul>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/login'>Login</Link></li> 
        <li><Link to=''/></li> 
        <li><Link to=''/></li> 
        </ul>
        </nav>
    )
}
}



export default Navabar