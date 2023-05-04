import * as React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import { Component } from "react"
import { Fragment } from "react"

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3F51B5",
  "&:hover": {
    backgroundColor: "#3F51B5",
  },
}))

class Add extends Component {
  state = {
    open: false,
    name: "",
    description: "",
    hours: "",
    address: "",
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...this.state }
    payload.id = this.props.businessTotal + 1
    delete payload.open
    console.log("THE BUSINESS", payload)
    this.props.addBusiness(payload)
    this.setState({
      open: false,
      name: "",
      description: "",
      hours: "",
      address: "",
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        description: "",
        hours: "",
        address: "",
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
                value={this.state.name}
                onChange={this.handleTextChange}
              />
              <TextField
                id="address"
                label="Address"
                variant="standard"
                value={this.state.address}
                onChange={this.handleTextChange}
              />
              <TextField
                id="hours"
                label="Hours (ex. 8AM - 9PM)"
                variant="standard"
                value={this.state.hours}
                onChange={this.handleTextChange}
              />
              <TextField
                id="description"
                label="Description"
                variant="standard"
                value={this.state.description}
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

export default Add
