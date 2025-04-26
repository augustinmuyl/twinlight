"use client"

import { useEffect, useState } from "react";

export default function Archive() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getItems() {
            try {
                const res = await fetch("http://localhost:4000/logs");
                if (!res.ok) {
                    throw new Error(`Server error: ${res.status}`);
                }
                const data = await res.json();
                setItems(data);
            } catch (err) {
                console.error("Fetch failed:", err);
                setError(err.message);
            }
        }
        getItems();
    }, [])

    if (error) {
        return <div>Error loading logs: {error}</div>;
    }

    return (
        <div className="bg-gray-300/40 rounded-3xl p-6 flex flex-col justify-center items-center gap-6
            w-full max-w-[1200px] max-h-[75vh] aspect-[2/3] md:aspect-[3/1.8] text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white [-webkit-text-stroke:2px_black]">Archive of Logs</h1>
              {items.length === 0 ? (
                <p>No logs found.</p>
              ) : (
                <ul className="flex flex-col gap-2 overflow-y-auto max-h-[50vh] w-full px-6 ">
                  {items.map((log, i) => (
                    <li
                        key={i}
                        className="text-lg bg-white/60 border border-black rounded-full p-6 flex justify-center items-center gap-4"
                    >
                      <strong>🌅 Sunrise:</strong> {log.sunrise} |{" "}
                      <strong>🌇 Sunset:</strong> {log.sunset} |{" "}
                      <strong>🌍 Location:</strong> {log.similarLocation}
                    </li>
                  ))}
                </ul>
            )}
        </div>
    )
}

