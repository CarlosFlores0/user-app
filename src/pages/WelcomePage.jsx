import React from 'react'
import AppFrame from '../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { ImProfile } from 'react-icons/im'

function WelcomePage() {
  return (
    <AppFrame>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        className="welcome-container">
          <div className="highlight">
            <Grid item
              container
              direction="column"
              justify="center"
              alignItems="center">
                <Typography variant="h4" color="inherit">
                  Proyecto que datos de usuarios de un API REST
                </Typography>
            </Grid>
            <Grid item container xs={12}
              justify="center"
              alignItems="center">
                <IconContext.Provider value={{size:"6em"}}>
                  <ImProfile style={{margin:"2em"}}/>
                </IconContext.Provider>
            </Grid>
            <Grid item
              container
              direction="column"
              justify="center"
              alignItems="center">
                <Typography variant="body1" color="textPrimary">
                  Para la elaboración de este proyecto se utilizo React y el API REST JsonPlaceHolder
                </Typography>
            </Grid>
          </div>
      </Grid>
    </AppFrame>
  )
}

export default WelcomePage