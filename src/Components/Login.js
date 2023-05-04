import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username" type="password" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
    </Box>
  )
}
