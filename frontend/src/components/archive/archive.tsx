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
        <div className="bg-white rounded-3xl p-12 flex flex-col justify-center items-center gap-4">
            <h1>Archive of Logs</h1>
              {items.length === 0 ? (
                <p>No logs found.</p>
              ) : (
                <ul>
                  {items.map((log, i) => (
                    <li key={i}>
                      <strong>Sunrise:</strong> {log.sunrise} |{" "}
                      <strong>Sunset:</strong> {log.sunset} |{" "}
                      <strong>Location:</strong> {log.similarLocation}
                    </li>
                  ))}
                </ul>
            )}
        </div>
    )
}

