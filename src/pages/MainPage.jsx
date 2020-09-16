import React from 'react'
import AppFrame from './../components/AppFrame'
import UserList from './../components/UserList'
import Typography from '@material-ui/core/Typography'

function MainPage() {
  return (
    <AppFrame>
      <Typography 
          style={{marginTop: 20, marginBottom: 20}}
          variant="h4" 
          color="inherit">
          Lista de usuarios
        </Typography>
      <UserList />
    </AppFrame>
  )
}

export default MainPage