import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../actions'
import UserForm from '../components/UserForm'
import {BiShoppingBag} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'




class SignUp extends React.Component{
state={
    errorMessage:''
}


    onSubmit=(formValues)=>{
        console.log('form values:',formValues)
        this.props.signUp(formValues)
        if(formValues.password.length<8){
            this.setState({errorMessage:'password is too short, must be 8 characters or more!'})
        }

    }
    render(){

        return(
            <>
            <div>
                <UserForm errorMessage={this.state.errorMessage}class={'signUp'} onSubmit={this.onSubmit}/>
            </div>

            </>
        )
    }
}


export default connect(null,{signUp})(SignUp)
