import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export default function APIData({ lat, lng }) {
    const [data, setData] = useState(null);

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
        }

        getData();
    }, []);

return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-8 text-center">
        {data ? (
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sun Times</h2>
                <p className="text-lg text-blue-600">🌅 Sunrise: <span className="font-medium">{data.sunrise}</span></p>
                <p className="text-lg text-purple-600 mt-2">🌇 Sunset: <span className="font-medium">{data.sunset}</span></p>
            </div>
        ) : (
            <p className="text-gray-500">Loading...</p>
        )}
    </div>
);
}
