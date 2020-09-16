import React from 'react'
import UserForm from './UserForm'

export default {
  title: "UserFrom",
  component: UserForm
}

const data = { name: "Carlos Flores"}

export const UserFormExample = () => <UserForm data={data}/>