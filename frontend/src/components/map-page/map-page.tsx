"use client"

import Navbar from "../navbar/navbar";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("../map-client/map-client"), { ssr: false });

export default function MapPage() {
    return (
        <div className="bg-[url('/assets/earth.png')] bg-cover bg-center w-full h-screen">
            <Navbar/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            justify-self-center flex flex-col items-center text-center justify-center gap-8">
                <MapClient/>
            </div>
        </div>
    )
}

