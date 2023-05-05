import React from "react"
import { Routes, Route, Navigate } from "react-router"
import Listings from "./Containers/Listings"
import Business from "./Containers/Business"
import AddPage from "./Containers/AddPage"
import Login from "./Containers/Login"
import cookie from "cookie"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedin"] ? true : false
}

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props
  debugger

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  )
}

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Listings/>} />
      <Route path="/business/:id" element={<Business/>} />
      <Route path="/addpage" element={<ProtectedRoute component={AddPage} />} />
      {/* <Route path="/addpage" component={AddPage} /> */}
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default Router
