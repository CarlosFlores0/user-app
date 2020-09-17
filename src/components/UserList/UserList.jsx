import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const users = [
  { id: 0, name: "Carlos Flores", email: "carlosfc.dev@gmail.com", address: { city: "Monterrey"}, phone: "52-8121757767", website: "carlosflores.com", company: {name:"Company"}},
  { id: 1, name: "Jose Lopez", email: "Lopez.dev@gmail.com", address: { city: "Ciudad de México"}, phone: "52-8184220121", website: "jose-lopez.com", company: {name:"Company 2"}},
  { id: 2, name: "Jorge Garza", email: "Jorge.pollo@gmail.com", address: { city: "Guadalajara"}, phone: "52-8150339204", website: "jorge-pollo.com", company: {name:"Company 3"}},
  { id: 3, name: "Edith Garza", email: "EdyGarza@gmail.com", address: { city: "Monterrey"}, phone: "52-8199402931", website: "edy-garza.com", company: {name:"Company 4"}},  
  { id: 4, name: "Carlos Flores", email: "carlosfc.dev@gmail.com", address: { city: "Monterrey"}, phone: "52-8121757767", website: "carlosflores.com", company: {name:"Company"}},
  { id: 5, name: "Jose Lopez", email: "Lopez.dev@gmail.com", address: { city: "Ciudad de México"}, phone: "52-8184220121", website: "jose-lopez.com", company: {name:"Company 2"}},
  { id: 6, name: "Jorge Garza", email: "Jorge.pollo@gmail.com", address: { city: "Guadalajara"}, phone: "52-8150339204", website: "jorge-pollo.com", company: {name:"Company 3"}},
  { id: 8, name: "Edith Garza", email: "EdyGarza@gmail.com", address: { city: "Monterrey"}, phone: "52-8199402931", website: "edy-garza.com", company: {name:"Company 4"}},  
  { id: 9, name: "Jose Lopez", email: "Lopez.dev@gmail.com", address: { city: "Ciudad de México"}, phone: "52-8184220121", website: "jose-lopez.com", company: {name:"Company 2"}},
  { id: 10, name: "Jorge Garza", email: "Jorge.pollo@gmail.com", address: { city: "Guadalajara"}, phone: "52-8150339204", website: "jorge-pollo.com", company: {name:"Company 3"}},
]

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const useStyles = makeStyles({
  table: {
    maxWidth: 950,
    justifyContent: "center"
  },
  cell: {
    cursor: "pointer"
  }
});

const renderUser = eventOnClickUser => user => {
  const { id, name, email, address, phone, website, company } = user
  // const classes = useStyles();

  return (
    <TableRow className="cell-table" hover role="checkbox" key={id} onClick={eventOnClickUser}>
      <StyledTableCell component="th" scope="row">
        {id}
      </StyledTableCell>
      <StyledTableCell align="center">{name}</StyledTableCell>
      <StyledTableCell align="center">{email}</StyledTableCell>
      <StyledTableCell align="center">{address.city}</StyledTableCell>
      <StyledTableCell align="center">{phone}</StyledTableCell>
      <StyledTableCell align="center">{website}</StyledTableCell>
      <StyledTableCell align="center">{company.name}</StyledTableCell>
    </TableRow>
  )
}

const UserList = () => {
  const classes = useStyles();
  const history = useHistory()
  const onClickHandler = () => {
    // history.push permite alterar la URL por programación
    history.push("/user")
  }

  const [allUser, setAllUser] = useState({users:[]})

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const setUser = async () => {
      try {
        let response = await fetch(url)
        let responseJson = await response.json()
        
        setAllUser({users:responseJson})
      } catch (error) {      
        if (error.response) { // Errores que nos responde el server
          console.log("Ha ocurrido un error en el servidor")
        } else if (error.request) { // Errores que suceden por no llegar al server
          console.log("Verifique la conexión a internet")
        } else { // Errores imprevistos
          console.log("Error al cargar los datos")
        }  
      }
    }
    setUser();
  },[])

  return (
    <Grid container
      justify="center">
      {
        users ?
        <TableContainer 
        className={classes.table} 
        component={Paper}
        elevation={3}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Ciudad</StyledTableCell>
              <StyledTableCell align="center">Telefono</StyledTableCell>
              <StyledTableCell align="center">Sitio web</StyledTableCell>
              <StyledTableCell align="center">Compañia</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser.users.map((user) => renderUser(onClickHandler)(user))}
          </TableBody>
        </Table>
      </TableContainer>
      :
      <Grid item>
        <h2>Nothing</h2>
      </Grid>
      }
    </Grid>
  )
}

export default UserList
