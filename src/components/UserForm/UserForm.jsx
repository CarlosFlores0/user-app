import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage } from 'formik'
import IconButton from '@material-ui/core/IconButton'
import { ImUndo2 } from 'react-icons/im'
import { IconContext } from 'react-icons'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter, useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'

const UserForm = () => {
  let location = useParams();
  
  const {id, name, username, phone, email, website, addressCity, addressSuite, addressStreet, addressGeoLat, addressGeoLng, addressZipcode, companyName, companyCatchPhrase, companyBs} = location

  const datos = {id, name, username, phone, email, website, addressCity, addressSuite, addressStreet, addressGeoLat, addressGeoLng, addressZipcode, companyName, companyCatchPhrase, companyBs}
  const [nameUser, setNameUser] = useState(datos.name)

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
            <>Datos del usuario: {nameUser}</>
            :
            <>Ingrese datos del usuario</>
          }
        </Typography>
      </Grid>
      <Grid item container
        justify="center">
        <Paper elevation={3} style={{width:"70%",padding:30}}>
          <Formik
            initialValues={datos}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'El nombre es requerido';
              }
              if (!values.username) {
                errors.username = 'El username es requerido';
              }
              if (!values.email) {
                errors.email = 'La dirección email es requerida';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'La dirección email es invalido';
              }
              if (!values.phone) {
                errors.phone = 'Un numero de telefono es requerido';
              }
              if (!values.website) {
                errors.website = 'La dirección web es requerido';
              }
              if (!values.addressCity) {
                errors.addressCity = 'La ciudad es requerido';
              }
              if (!values.addressSuite) {
                errors.addressSuite = 'La suite es requerida';
              }
              if (!values.addressStreet) {
                errors.addressStreet = 'La calle es requerida';
              }
              if (!values.addressZipcode) {
                errors.addressZipcode = 'El codigo postal es requerido';
              }
              if (!values.addressGeoLat) {
                errors.addressGeoLat = 'La latitud es requerida';
              }
              if (!values.addressGeoLng) {
                errors.addressGeoLng = 'La longitud es requerido';
              }
              if (!values.companyName) {
                errors.companyName = 'El nombre de la compañia es requerido';
              }
              if (!values.companyCatchPhrase) {
                errors.companyCatchPhrase = 'Una descripción es requerida';
              }
              if (!values.companyBs) {
                errors.companyBs = 'El BS es requerido';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setNameUser(values.name)
                console.log(values)
                setSubmitting(false);
              }, 400);
            }}>
            {({
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit}>
              <h3>Datos generales</h3>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Nombre</label>
                  <Field type="name" name="name" className="form-control"/>
                  <ErrorMessage name="name" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Username</label>
                  <Field type="text" name="username" className="form-control"/>
                  <ErrorMessage name="username" className="text-invalid" component="div" />
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Email</label>
                  <Field type="email" name="email" className="form-control"/>
                  <ErrorMessage name="email" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Telefono</label>
                  <Field type="text" name="phone" className="form-control"/>
                  <ErrorMessage name="phone" className="text-invalid" component="div" />
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Sitio web</label>
                  <Field type="text" name="website" className="form-control"/>
                  <ErrorMessage name="website" className="text-invalid" component="div" />
                </div>
              </div>
              <h3>Dirección</h3>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Ciudad</label>
                  <Field type="text" name="addressCity" className="form-control"/>
                  <ErrorMessage name="addressCity" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Suite</label>
                  <Field type="text" name="addressSuite" className="form-control"/>
                  <ErrorMessage name="addressSuite" className="text-invalid" component="div" />
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Calle</label>
                  <Field type="text" name="addressStreet" className="form-control"/>
                  <ErrorMessage name="addressStreet" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Zipcode</label>
                  <Field type="text" name="addressZipcode" className="form-control"/>
                  <ErrorMessage name="addressZipcode" className="text-invalid" component="div" />
                </div>
              </div>
              <div className="col pb-3">
                <h4>Geolocalización</h4>
                <div className="col-md-5 pb-3">
                  <label>Latitud</label>
                  <Field type="number" name="addressGeoLat" className="form-control"/>
                  <ErrorMessage name="addressGeoLat" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Longitud</label>
                  <Field type="number" name="addressGeoLng" className="form-control"/>
                  <ErrorMessage name="addressGeoLng" className="text-invalid" component="div" />
                </div>
              </div>
              <h3>Compañia</h3>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Nombre de la compañia</label>
                  <Field type="text" name="companyName" className="form-control"/>
                  <ErrorMessage name="companyName" className="text-invalid" component="div" />
                </div>
                <div className="col-md-5">
                  <label>Descripción</label>
                  <Field type="text" name="companyCatchPhrase" className="form-control"/>
                  <ErrorMessage name="companyCatchPhrase" className="text-invalid" component="div" />
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-5 mr-5">
                  <label>Bs</label>
                  <Field type="text" name="companyBs" className="form-control"/>
                  <ErrorMessage name="companyBs" className="text-invalid" component="div" />
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <button className="btn btn-primary mr-5" type="submit" disabled={isSubmitting}>Enviar</button>
                <button className="btn btn-warning mr-5" type="submit" disabled={isSubmitting}>Modificar</button>
                <button className="btn btn-danger" type="submit" disabled={isSubmitting}>Eliminar</button>
              </div>
            </form>
            )}
          </Formik>
        </Paper>

      </Grid>
    </Grid>
  )
}

UserForm.propTypes = {
  data: PropTypes.any,
}

export default UserForm
