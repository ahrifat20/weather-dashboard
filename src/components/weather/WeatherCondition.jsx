import cloud from "../../assets/icons/cloud.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import tempMax from "../../assets/icons/temp-max.svg";
import tempMin from "../../assets/icons/temp-min.svg";
import windIcon from "../../assets/icons/wind.svg";
import { useWeather } from "../../hooks";

export default function WeatherCondition(){
  const {weatherData} = useWeather();
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
    description
  } = weatherData;
    return (
      <>
        <div>
          <p className="text-sm lg:text-lg font-bold mb-8">
            The Climate is {climate}, {description}.
          </p>
          <ul className="space-y-6 lg:space-y-6">
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
              <span>Temp max</span>
              <div className="inline-flex space-x-4">
                <p>{Math.round(maxTemperature)}°</p>
                <img src={tempMax} alt="temp-max" />
              </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
              <span>Temp min</span>
              <div className="inline-flex space-x-4">
                <p>{Math.round(minTemperature)}°</p>
                <img src={tempMin} alt="temp-min" />
              </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
              <span>Humadity</span>
              <div className="inline-flex space-x-4">
                <p>{humidity}%</p>
                <img src={humidityIcon} alt="humidity" />
              </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
              <span>Cloudy</span>
              <div className="inline-flex space-x-4">
                <p>{cloudPercentage}%</p>
                <img src={cloud} alt="cloudy" />
              </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
              <span>Wind</span>
              <div className="inline-flex space-x-4">
                <p>{Math.round(wind)} km/h</p>
                <img src={windIcon} alt="wind" />
              </div>
            </li>
          </ul>
        </div>
      </>
    );
}