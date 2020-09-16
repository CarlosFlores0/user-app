import React from 'react'
import AppFrame from '../components/AppFrame'
import UserForm from '../components/UserForm'

const data = { 
  id: 1, 
  name: "Leanne Graham", 
  username: "Bret", 
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

function UserPage() {
  return (
    <AppFrame>
      <UserForm data={data}/>
    </AppFrame>
  )
}

export default UserPage
