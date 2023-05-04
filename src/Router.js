import React from "react"
import { Switch, Route, Redirect } from "react-router"
import Listings from "./Containers/Listings"
import Business from "./Containers/Business"
import AddPage from "./Containers/AddPage"
import Login from "./Components/Login"

const checkAuth = (props) => false

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/login" />
  )
  
}

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listings} />
      <Route path="/business/:id" component={Business} />
      <Route path="/addpage" element={<ProtectedRoute component={AddPage} />} />
      <Route path ="/login" component={Login} />
    </Switch>
  )
}

export default Router
