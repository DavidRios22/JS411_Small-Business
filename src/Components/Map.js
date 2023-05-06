import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import Geocode from "react-geocode"


export default function MapDisplay() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

Geocode.setApiKey("")
Geocode.setLocationType("ROOFTOP")
Geocode.enableDebug()
Geocode.fromAddress("30123 Sawgrass Trail Georgetown").then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location
    console.log(lat, lng)
  },
  (error) => {
    console.error(error)
  }
)



function Map() {
  console.log(Response);
  const center = useMemo(() => ({ lat: 30.7091729, lng: -97.6769609 }), [])

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  )
}
