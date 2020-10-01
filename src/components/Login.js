import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions'
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
                <Field
                name='email'
                component={this.renderInput}
                label={'Enter Email'}
                />
                <Field
                name='password'
                component={this.renderInput}
                label={'Enter password'}
                />

                <button className='ui button primary'>Submit</button>
            </form>
            <div>Don't have and account?</div>
            <Link to='/signup'>Sign Up</Link>
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
 


export default connect(null,{login})(reduxForm({
    form: 'form',
    validate,
})(Login))