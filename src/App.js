import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div>
      <h1>salam</h1>
    </div>
  );
}

export default App;
