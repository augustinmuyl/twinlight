"use client"

import Navbar from "../navbar/navbar";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("../map-client/map-client"), { ssr: false });

export default function MapPage() {
    return (
        <div className="bg-[url('/assets/earth.png')] bg-cover bg-center w-full h-screen flex flex-col">
            <Navbar/>
            <div className="w-full flex-1 flex items-center justify-center z-0 px-4 md:px-10">
                <MapClient/>
            </div>
        </div>
    )
}

