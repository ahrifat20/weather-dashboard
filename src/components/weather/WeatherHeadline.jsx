import pin from "../../assets/pin.svg";
import { useWeatherContext } from "../../hooks";
import { getFormatedDate } from "../../utils/date-util";

import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import rainIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";

export default function WeatherHeadline(){
  const {weatherData} = useWeatherContext();
  const {climate, location, temperature, time} = weatherData;

  const getWeatherIcon = (climate) => {
    switch(climate) {
      case "Rain":
        return rainIcon;
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return sunnyIcon;
      case "Snow":
        return snowIcon;
      case "Thunder":
        return thunderIcon;
      case "Fog":
        return hazeIcon;
      case "Haze":
        return hazeIcon;
      case "Mist":
        return hazeIcon;
      default:
        return sunnyIcon;
    }
  }
    return (
      <>
        <div>
          <div className="max-md:flex items-center justify-between md:-mt-10">
            <img src={getWeatherIcon(climate)} alt="cloud" />
            <div className="max-md:flex items-center max-md:space-x-4">
              <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                {Math.round(temperature)}°
              </h1>
              <div className="flex items-center space-x-4 md:mb-4">
                <img src={pin} alt="location icon" />
                <h2 className="text-2xl lg:text-[50px] leading-none">{location}</h2>
              </div>
            </div>
          </div>
          <p className="text-sm lg:text-lg">{getFormatedDate(time, "time", false)} - {getFormatedDate(time, "date", false)}</p>
        </div>
      </>
    );
}