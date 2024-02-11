import { weatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({children}) => {
    const {weatherData, loading, error} = useWeather();

    return (
        <weatherContext.Provider value={{weatherData, loading, error}}>
            {children}
        </weatherContext.Provider>
    )
};

export default WeatherProvider;