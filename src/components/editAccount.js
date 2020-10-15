import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions'
import {BiShoppingBag} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import UserForm from './UserForm'
import _ from 'lodash'
class EditAccount extends React.Component{
    onSubmit=(formValues)=>{
        console.log()
this.props.editUser(this.props.currentUser.user.id,formValues)
    }
    render(){
        return(
            <div>
                <h3>Edit Profile</h3>
                <UserForm 
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