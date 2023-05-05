import * as React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import { Component } from "react"
import { Fragment } from "react"
import { Link } from "react-router-dom"

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3F51B5",
  "&:hover": {
    backgroundColor: "#3F51B5",
  },
}))



class Login extends Component {
  
  state = {
    username: "",
    password: "",
  }
  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...this.state }
    delete payload.open
    console.log("THE USER", payload)
    this.props.addUser(payload)
    this.setState({
      open: false,
      username: "",
      password: "",
    })
    e.preventDefault()
    document.cookie = "loggedin=True;max-age=60*1000"
    
    // window.locate.replace("/")
    
    // window.location.reload(false)
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        username: "",
        password: "",
      })
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Stack>
            <TextField
              id="username"
              label="Username"
              variant="standard"
              value={this.state.username}
              onChange={this.handleTextChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              value={this.state.password}
              onChange={this.handleTextChange}
            />
            <ColorButton variant="contained" type="submit">
              Save
            </ColorButton>

          </Stack>
        </form>
      </Fragment>
    )
  }
}

export default Login
