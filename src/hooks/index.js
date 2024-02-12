import { useContext } from "react";
import { favouriteContext, locationContext, weatherContext } from "../context";
import useLocalStorage from "./useLocalStorage";
import useWeather from "./useWeather";

const useWeatherContext = () => {
    return useContext(weatherContext);
};
const useFavouritesContext = () => {
    return useContext(favouriteContext);
};

const useLocationContext = () => {
    return useContext(locationContext);
};

export { useFavouritesContext, useLocalStorage, useLocationContext, useWeather, useWeatherContext };

