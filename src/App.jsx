import { useEffect, useState } from "react";
import "./App.css";
import City from "./components/City";
import axios from "axios";
import ShowWeather from "./components/ShowWeather";

const key = "7a8511fd654a526542bf2e39cf243a27";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(
    function () {
      if (!city) return;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        )
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => console.log(error));
      setCity("");
    },
    [open]
  );

  return (
    <div className="container">
      <h1>WEATHER</h1>
      <h3>{data.name}</h3>
      <City city={city} setCity={setCity} setOpen={setOpen} />
      <ShowWeather data={data} />
    </div>
  );
}

export default App;
