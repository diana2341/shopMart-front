import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions'
import {BiShoppingBag} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import history from '../history'


class Login extends React.Component{

    renderError=({error,touched})=>{
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput=(formProps)=>{
        const className = `field ${formProps.meta.error && formProps.meta.touched? 'error' : ''}`

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input 
                value={formProps.input.value}
                onChange={formProps.input.onChange}
                autoComplete='off'
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit=(formValues)=>{
        this.props.login(formValues)
    }
    render(){
        return(
            <>
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <p className='form-title'>Log In</p>
                <Field 
                className='input'
                name='email'
                component={this.renderInput}
                label={'Enter Email'}
                />
                <Field 
                className='input'
                name='password'
                component={this.renderInput}
                label={'Enter Password'}
                />

                <button className='ui button primary sign-in'>Submit</button>
                <div className='dontHave'>Don't have an account?</div>
            <Link  className='signLink' to='/signup'>Sign Up</Link>
            <div className='log-sign'>
                    <span><BiShoppingBag size={22}/> Log in from anywhere to see what’s in your bag</span>
                    <span><BsClock size={22}/>  Quick and easy checkout.</span>
                    <span><BsStar size={22}/>   Get the inside scoop on trend and private sales.</span>
                </div>
            </form>
            
            </>
        )
    }
}

const validate=(formValues)=>{
    const errors={}

    if(!formValues.email){
        errors.email = 'You must enter an email'
    }
    if(!formValues.password){
        errors.password = 'You must enter a password'
    }
    return errors 
}
 

const mapStateToProps=(state)=>{
    return{location:state.products.location}
}
export default connect(mapStateToProps,{login})(reduxForm({
    form: 'form',
    validate,
})(Login))