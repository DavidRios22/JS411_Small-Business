import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import cookie from "cookie"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedin"] ? true : false
}



export default function Listings(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, idx) => (
            <TableRow
              key={business.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/business/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell>{business.description}</TableCell>
              <TableCell align="right">{business.hours}</TableCell>
              <TableCell align="right">{business.address}</TableCell>
              {checkAuth() === true && (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeBusiness(idx)}
                    sx={{ color: "#FF0000" }}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
