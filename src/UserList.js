import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div className='css-cards'>
      {
        users.map((element)=>(<UserCard user={element}/>))
      }
    </div>
  )
}

export default UserList
