import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  },
  cell: {
    cursor: "pointer"
  }
});

const renderUser = eventOnClickUser => user => {
  const { id, name, email, address, phone, website, company } = user
  const classes = useStyles();

  return (
    <TableRow className={classes.cell} hover role="checkbox" key={id} onClick={eventOnClickUser}>
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

const UserList = ({ users, onClickUser }) => {
  const classes = useStyles();
  return (
    <TableContainer 
      className={classes.table} 
      component={Paper}>
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
          {users.map((user) => renderUser(onClickUser)(user))}
        </TableBody>
      </Table>
  </TableContainer>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList
