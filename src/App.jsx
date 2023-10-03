import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const ApiKey = "13a65c047264a4e0be7622cf30604eee";
    const IconGet = "https://openweathermap.org/img/wn/10d@4x.png"

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-slate-50  px-2'>
      {
        weather === null ? (
          <h3 className="bg-black rounded-lg p-8  text-white px-2" >
            <picture>
              <img src="/img/NubeCarga.png " alt="" /> </picture>
              Loading...
             </h3>
        ) : (
          <WeatherCard weather={weather} />
        )
      }
      
    </main>
  );
}

export default App;
