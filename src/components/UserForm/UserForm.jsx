import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'

const UserForm = ({data}) => {

  const [datos, setDatos] = useState(data)
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
  
  const enviarDatos = (event) => {
    event.preventDefault();
  }

  return (
    <Grid container>
      <Grid item>
        <Typography 
          style={{marginTop: 20, marginBottom: 20}}
          variant="h4" 
          color="inherit">
          {
            datos.name ?
            <>Datos del usuario: {datos.name}</>
            :
            <>Ingrese datos del usuario</>
          }
        </Typography>
      </Grid>
      <Grid item container
        justify="center">
        <Paper elevation={3} style={{width:"70%",padding:30}}>
        <form onSubmit={enviarDatos}>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Nombre</label>
              <input 
                placeholder="Ingrese Nombre"
                className="form-control"
                type="text"
                name="name"
                value={datos.name}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Username</label>
              <input 
                placeholder="Ingrese username"
                className="form-control"
                type="text"
                name="username"
                value={datos.username}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-5">
              <label>Email</label>
              <input 
                placeholder="Ingrese email"
                className="form-control"
                type="text"
                name="email"
                value={datos.email}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Enviar</button>
          </div>
        </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

UserForm.propTypes = {
  data: PropTypes.any,
}

export default UserForm
