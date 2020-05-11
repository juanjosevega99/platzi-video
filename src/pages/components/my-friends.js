import React from 'react'
//import
//import Friend from './friend'

const MyFriends = props => {
  <div>
    <h1></h1>
    {
      props.data.map( item => (
          <Friend key = {item.get('id')} {...item.toJS()}/>
        )
      )
    }
  </div>
}

export default MyFriends