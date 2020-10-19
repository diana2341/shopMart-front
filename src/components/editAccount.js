import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions'

import UserForm from './UserForm'
import _ from 'lodash'
class EditAccount extends React.Component{
    state={
        errorMessage:''
    }
    onSubmit=(formValues)=>{
this.props.editUser(this.props.currentUser.user.id,formValues)

if(formValues.password.length<8){
    console.log(formValues.password)

    this.setState({errorMessage:'password is too short, must be 8 characters or more!'})
}
    }
    render(){
        return(
            <div>
                <h3>Edit Profile</h3>
                <UserForm 
                errorMessage={this.state.errorMessage}
                initialValues={this.props.currentUser.user}
                onSubmit={this.onSubmit}
                class={'edit'}
                />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{currentUser: state.auth}
}
export default connect(mapStateToProps,{editUser})(EditAccount)