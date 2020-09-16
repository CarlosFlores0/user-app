import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
  about: {
    marginRight: theme.spacing(4),
    '&:hover': {
      color: "#BAD6DB",
   }
  },
  list: {
    '&:hover': {
      color: "#BAD6DB",
   }
  },
  appBar: {
    padding: theme.spacing(2)
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container
      justify="center">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <Link
              className={classes.about}
              component={LinkRouter}  
              to="/" 
              color="inherit" 
              aria-label="menu"
              style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="inherit">
                Acerca del proyecto
              </Typography>
            </Link>
            <Link
              className={classes.list}
              component={LinkRouter}  
              to="/main" 
              color="inherit" 
              aria-label="menu"
              style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="inherit">
                Lista de usuarios
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Grid item
          xs={12}
          sm={11}
          md={10}
          lg={8}>
            {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node
}

export default AppFrame
