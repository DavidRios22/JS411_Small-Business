import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import store from "./Redux/store"
import Navigation from "./Containers/Navigation"
import MapDisplay from "./Components/Map"

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navigation /> */}
          {/* <Router /> */}
          <MapDisplay />
        </BrowserRouter>
      </Provider>
  )
}

export default App
