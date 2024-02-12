import { useEffect, useState } from "react";
import { useLocationContext } from "../hooks/index";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        climateIcon:"",
        description: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    });
    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });
    const [error, setError] = useState("");

    const {searchLocation } = useLocationContext();

    const fetchWeatherData = async (api) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching wather data..."
            });
            const response = await fetch(api);

            if(!response.ok) {
                const errorMessage = `Fetching Weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            const updatedWeatherData = {
              ...weatherData,
              location: data.name,
              climate: data.weather[0].main,
              climateIcon: data.weather[0].icon,
              description: data.weather[0].description,
              temperature: data.main.temp,
              maxTemperature: data.main.temp_max,
              minTemperature: data.main.temp_min,
              humidity: data.main.humidity,
              cloudPercentage: data.clouds.all,
              wind: data.wind.speed,
              time: data.dt,
              longitude: data.coord.lon,
              latitude: data.coord.lat,
            };
            setWeatherData(updatedWeatherData);
        }catch(error) {
            setError(error.message);
        }finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    };
    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding Location..."
        });

        if(searchLocation){
            fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
        }else {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            })
        }
    },[searchLocation]);

    return {
        weatherData,
        loading,
        error
    }
};
export default useWeather;