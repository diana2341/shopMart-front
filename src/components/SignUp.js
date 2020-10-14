import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../actions'
import UserForm from '../components/UserForm'
import {BiShoppingBag} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'




class SignUp extends React.Component{



    onSubmit=(formValues)=>{
        this.props.signUp(formValues)

    }
    render(){

        return(
            <>
            <div>
                <UserForm onSubmit={this.onSubmit}/>
            </div>

            </>
        )
    }
}


export default connect(null,{signUp})(SignUp)
