import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import cookie from "cookie"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedin"] ? true : false
}

const handleClearCookiesClick = () => {
  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.trim().split("=")
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  })
  window.location.reload(false)
}

export default function Navigation(props) {
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
          <Link color="inherit" to="/">
            Listings
          </Link>
          <Link color="inherit" to="/addpage">
            Add
          </Link>
          {checkAuth() ? (
            <Link onClick={handleClearCookiesClick} color="inherit" to="/">
              Logout
            </Link>
          ) : (
            <Link color="inherit" to="/login">
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <AppBar>
        {checkAuth() ? (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            You are logged is as {props.user.username}
          </Typography>
        ) : (
          <></>
        )}
      </AppBar>
    </Box>
  )
}
