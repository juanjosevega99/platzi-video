import React, { Component } from 'react'
import UserInfo from '../components/user-info.js'

class UserInfoContainer extends Component {
  state = {
    inpputValue: "" 
  }
  toogleInfo = event => {
    e.preventDefault()
    alert(1)
  }
  render() {
    return (
      <UserInfo
        {...props.myUserInfo}
        handleClick = {this.toogleInfo}
      />
    )
  }
}

export default UserInfoContainer