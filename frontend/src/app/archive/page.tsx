"use client"

import { useEffect, useState } from "react";
// import APIData from "../../components/api-data/api-data";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.name))
      .catch((err) => console.error("Error: ", err));
  }, []);

  return (
    <div>
      hello, {message}!
    </div>
  )
}

