import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../actions'
import UserForm from '../components/UserForm'
import {BiShoppingBag} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'




class SignUp extends React.Component{
state={
    errorMessage:'',
    backError:''
}


    onSubmit=(formValues)=>{
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // console.log('form values:',formValues)
        this.props.signUp(formValues)
        .catch(err => {
            this.setState({backError:err.response.data.errors})
        })
        if(pattern.test(formValues.email.formValues===false)){
            // console.log(err.response.data.errors)
           this.setState({errorMessage:'email is invalid'});
         }


    }
    render(){

        return(
            <>
            <div>
                <UserForm backError={this.state.backError}errorMessage={this.state.errorMessage}class={'signUp'} onSubmit={this.onSubmit}/>

            </div>

            </>
        )
    }
}


export default connect(null,{signUp})(SignUp)
