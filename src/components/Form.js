import React from 'react'
import {Field, reduxForm} from 'redux-form'

class Form extends React.Component{

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
        this.props.onSubmit(formValues)
    }
    render(){
        return(
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

export default reduxForm({
    form: 'form',
    validate,
})(Form)