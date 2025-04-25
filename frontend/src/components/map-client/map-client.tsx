"use client"

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.setView(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
export default function MapClient() {
    return (
       <div className="w-full max-w-[600px] aspect-[2/3] sm:aspect-[3/2] shadow-lg rounded-3xl overflow-hidden border border-red-500">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="w-full h-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker/>
            </MapContainer>
        </div>
    )
}

