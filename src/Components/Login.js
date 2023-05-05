import * as React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import { Component } from "react"
import { Fragment } from "react"
import { useNavigate } from "react-router"

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3F51B5",
  "&:hover": {
    backgroundColor: "#3F51B5",
  },
}))


class Login extends Component {
  // navigate = useNavigate()

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
    // payload.id = this.props.businessTotal + 1
    delete payload.open
    console.log("THE BUSINESS", payload)
    this.props.addUser(payload)
    this.setState({
      open: false,
      username: "",
      password: "",
    })
    e.preventDefault()
    document.cookie = "loggedin=True;max-age=60*1000"

    // navigate("/")
    window.location.reload(false)
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
              id="name"
              label="Name"
              variant="standard"
              value={this.state.username}
              onChange={this.handleTextChange}
            />
            <TextField
              id="address"
              label="Address"
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
