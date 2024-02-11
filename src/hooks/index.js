import { useContext } from "react";
import { favouriteContext, weatherContext } from "../context";
import useLocalStorage from "./useLocalStorage";
import useWeather from "./useWeather";

const useWeatherContext = () => {
    return useContext(weatherContext);
};
const useFavouritesContext = () => {
    return useContext(favouriteContext);
};

export { useFavouritesContext, useLocalStorage, useWeather, useWeatherContext };

