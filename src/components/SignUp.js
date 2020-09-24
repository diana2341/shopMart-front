import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {signUp} from '../actions'

class SignUp extends React.Component{



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
        this.props.signUp(formValues)
        // console.log(formValues)

    }
    render(){
        return(
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                name='first_name'
                component={this.renderInput}
                label={'Enter First Name'}
                />
                <Field
                name='last_name'
                component={this.renderInput}
                label={'Enter Last Name'}
                />
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
                  <Field
                name='street'
                component={this.renderInput}
                label={'Enter street'}
                />
                  <Field
                name='state'
                component={this.renderInput}
                label={'Enter state'}
                />
                  <Field
                name='country'
                component={this.renderInput}
                label={'Enter country'}
                />
                  <Field
                name='zip_code'
                component={this.renderInput}
                label={'Enter zip code'}
                />

                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate=(formValues)=>{
    const errors={}
    if(!formValues.first_name){
        errors.first_name = 'You must enter your first name'
    }
    if(!formValues.last_name){
        errors.last_name= 'You must enter your last name'
    }
    if(!formValues.email){
        errors.email = 'You must enter an email'
    }
    if(!formValues.password){
        errors.password = 'You must enter a password'
    }
    if(!formValues.street){
        errors.street= 'You must enter your street'
    }
    if(!formValues.state){
        errors.state = 'You must enter your state'
    }
    if(!formValues.country){
        errors.country = 'You must enter your country'
    }
    if(!formValues.zip_code){
        errors.zip_code = 'You must enter your zip code'
    }
    return errors 
}

export default connect(null,{signUp})(reduxForm({
    form: 'form',
    validate,
})(SignUp))
