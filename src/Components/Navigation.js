import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#3CB371" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Busines
          </Typography>
          <Link color="inherit" to="/">Listings</Link>
          <Link color="inherit" to="/addpage">Add</Link>
          <Link color="inherit"to="/login" >Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
