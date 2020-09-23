import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'
class Login extends React.Component{

    render(){
        return(
            <>
            <div><Form/></div>
            <div>Don't have and account?</div>
            <Link to='/signup'>Sign Up</Link>
            </>
        )
    }
}

export default Login