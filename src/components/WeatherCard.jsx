import { useState } from "react";
import WeatherStats from "./WeatherStats";

const WeatherCard = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const convertUnits = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      const farenheittemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${farenheittemp}°F`;
    }
  };

//   const weatherIcons = {
//     "broken clouds": "/img/nublado.jpg" 
//   }

  const handleChangeUnits = () => {
    setIsCelsius(!isCelsius);
  };
  console.log(convertUnits(weather.main.temp));

  console.log(weather);
  return (
    <section className="text-center gap-5 grid">
      <h2 className="text-xl font-bold">
        {" "}
        {weather.name}, {weather.sys.country}{" "}
      </h2>
      <div className="grid gap-5 sm:grid-cols-[1fr_auto] ">
        {/**Top Section */}
        <article className="bg-slate-200 rounded-2xl grid grid-cols-2 items-center p-3">
          <h4 className="col-span-2 text-lg capitalize">
            {weather.weather[0].description}
          </h4>
          <span className="text-5xl">{convertUnits(weather.main.temp)} </span>
          <picture>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              
            // src= {weatherIcons[weather.weather[0].description] }
              alt=""
            />
          </picture>
        </article>

        {/**Bottom Section */}
        <article className="grid grid-cols-3 justify-items-center bg-slate-200 rounded-2xl p-2 py-3 sm:grid-cols-1">
          <WeatherStats
            icon="/img/weather-windy.png"
            unit="m/s"
            value={weather.wind.speed}
          />
          <WeatherStats
            icon="/img/uil_raindrops-alt.png"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStats
            icon="/img/tabler_arrow-wave-right-down.png"
            unit="hPa"
            value={weather.main.pressure}
          />
        </article>
      </div>

      <button onClick={handleChangeUnits}> °C / °F </button>
    </section>
  );
};
export default WeatherCard;
