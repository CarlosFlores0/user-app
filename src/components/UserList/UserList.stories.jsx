import React from 'react'
import UserList from './UserList'
import { action } from '@storybook/addon-actions'

export default {
  title: "UserList",
  component: UserList
}

const users = [
  { id: 0, name: "Carlos Flores", email: "carlosfc.dev@gmail.com", address: { city: "Monterrey"}, phone: "52-8121757767", website: "carlosflores.com", company: {name:"Company"}},
  { id: 1, name: "Jose Lopez", email: "Lopez.dev@gmail.com", address: { city: "Ciudad de México"}, phone: "52-8184220121", website: "jose-lopez.com", company: {name:"Company 2"}},
  { id: 2, name: "Jorge Garza", email: "Jorge.pollo@gmail.com", address: { city: "Guadalajara"}, phone: "52-8150339204", website: "jorge-pollo.com", company: {name:"Company 3"}},
  { id: 3, name: "Edith Garza", email: "EdyGarza@gmail.com", address: { city: "Monterrey"}, phone: "52-8199402931", website: "edy-garza.com", company: {name:"Company 4"}},  
]

export const UserListExample = () => <UserList users={users} onClickUser={action("Click en user")}/>