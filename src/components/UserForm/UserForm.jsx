import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import { ImUndo2 } from 'react-icons/im'
import { IconContext } from 'react-icons'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
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
      <Grid item
        className="row">
        <IconButton color="inherit" aria-label="menu">
          <Link 
            component={LinkRouter}  
            to="/main" 
            color="inherit" 
            aria-label="menu">
            <IconContext.Provider value={{size:'2em'}}>
              <ImUndo2 />
            </IconContext.Provider>
          </Link>
        </IconButton>
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
          <h3>Datos generales</h3>
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
            <div className="col-md-5 mr-5">
              <label>Email</label>
              <input 
                placeholder="Ingrese email"
                className="form-control"
                type="text"
                name="email"
                value={datos.email}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Telefono</label>
              <input 
                placeholder="Ingrese numero de telefono"
                className="form-control"
                type="text"
                name="phone"
                value={datos.phone}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Sitio web</label>
              <input 
                placeholder="Ingrese su website"
                className="form-control"
                type="text"
                name="website"
                value={datos.website}
                onChange={handleInputChange}/>
            </div>
          </div>
          <h3>Dirección</h3>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Ciudad</label>
              <input 
                placeholder="Ingrese Ciudad"
                className="form-control"
                type="text"
                name="address.city"
                value={datos.address.city}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Suite</label>
              <input 
                placeholder="Ingrese suite"
                className="form-control"
                type="text"
                name="address.suite"
                value={datos.address.suite}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Calle</label>
              <input 
                placeholder="Ingrese calle"
                className="form-control"
                type="text"
                name="address.street"
                value={datos.address.street}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Zipcode</label>
              <input 
                placeholder="Ingrese zipcode"
                className="form-control"
                type="text"
                name="address.zipcode"
                value={datos.address.zipcode}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div className="col pb-3">
            <h4>Geolocalización</h4>
            <div className="col-md-5 pb-3">
              <label>Latitud</label>
              <input 
                placeholder="Ingrese latitud"
                className="form-control"
                type="text"
                name="address.geo.lat"
                value={datos.address.geo.lat}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Longitud</label>
              <input 
                placeholder="Ingrese longitud"
                className="form-control"
                type="text"
                name="address.geo.lng"
                value={datos.address.geo.lng}
                onChange={handleInputChange}/>
            </div>
          </div>
          <h3>Compañia</h3>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Nombre de la compañia</label>
              <input 
                placeholder="Ingrese nombre de la compañia"
                className="form-control"
                type="text"
                name="company.name"
                value={datos.company.name}
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-5">
              <label>Descripción</label>
              <input 
                placeholder="Describa un poco la compañia"
                className="form-control"
                type="text"
                name="company.catchPhrase"
                value={datos.company.catchPhrase}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-5 mr-5">
              <label>Bs</label>
              <input 
                placeholder="Ingrese BS"
                className="form-control"
                type="text"
                name="company.bs"
                value={datos.company.bs}
                onChange={handleInputChange}/>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <button className="btn btn-primary mr-5" type="submit">Enviar</button>
            <button className="btn btn-warning mr-5" type="submit">Modificar</button>
            <button className="btn btn-danger" type="submit">Eliminar</button>
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
