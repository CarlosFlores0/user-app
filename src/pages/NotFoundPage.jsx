import React from 'react'
import AppFrame from '../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { GiPeriscope } from 'react-icons/gi'


function NotFoundPage() {
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
                <Typography variant="h2" color="inherit">
                  PAGINA NO ENCONTRADA
                </Typography>
            </Grid>
            <Grid item container xs={12}
              justify="center"
              alignItems="center">
                <IconContext.Provider value={{size:"6em"}}>
                  <GiPeriscope style={{margin:"2em"}}/>
                </IconContext.Provider>
            </Grid>
            <Grid item
              container
              direction="column"
              justify="center"
              alignItems="center">
                <Typography variant="body1" color="textPrimary">
                  La pagina que desea ingresar no se encuentra
                </Typography>
                <Link color="inherit"
                  aria-label="menu"
                  component={RouterLink}
                  to="/">
                    Volver al inicio
                </Link>
            </Grid>
          </div>
      </Grid>
    </AppFrame>
  )
}

export default NotFoundPage
