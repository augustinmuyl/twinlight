import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export default function APIData({ lat, lng }) {
    const [data, setData] = useState(null);
    const map = useMap();

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:4000/api/data", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    lat: lat,
                    lng: lng,
                })
            });
            const json = await res.json();
            setData(json);
            setTimeout(() => {
                map.eachLayer((layer) => {
                    if (layer.getPopup && layer.getPopup()) {
                        layer.getPopup().update();
                    }
                });
            }, 0);
        }

        getData();
    }, [lat, lng, map]);

return (
    <div className="">
        {data ? (
            <div>
                <p className="text-lg font-semibold text-[#FFB487]">🌅 Sunrise: {data.sunrise}</p>
                <p className="text-lg font-semibold text-[#415777]">🌇 Sunset: {data.sunset}</p>
            </div>
        ) : (
            <p className="text-gray-500">Loading...</p>
        )}
    </div>
);
}
