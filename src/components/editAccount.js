import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions'

import UserForm from './UserForm'
import _ from 'lodash'
class EditAccount extends React.Component{
    state={
        errorMessage:'',
        backError:''
    }
    onSubmit=(formValues)=>{
        this.props.editUser(this.props.currentUser.user.id,formValues)
        .catch(err => {
    // console.log(err.response.data.errors)
   this.setState({backError:err.response.data.errors});
 })
    }
    render(){
        return(
            <div>
                <h3>Edit Profile</h3>
                <UserForm 
                backError={this.state.backError}
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