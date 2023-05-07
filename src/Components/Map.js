import { useState, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import Geocode from "react-geocode"

export default function MapDisplay() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  Geocode.setApiKey("")
  Geocode.setLocationType("ROOFTOP")
  Geocode.enableDebug()

  const [response, setResponse] = useState([])

  useEffect(() => {
    Geocode.fromAddress("30123 Sawgrass Trail Georgetown").then(
      (response) => {
        setResponse(response.results[0].geometry.location)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])


  const lattitude = response.lat
  const longitute = response.lng


  const center = {
    lat: lattitude,
    lng: longitute,
  }


  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  )
}
