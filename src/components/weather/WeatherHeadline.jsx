import pin from "../../assets/pin.svg";
import { useWeatherContext } from "../../hooks";
import { getFormatedDate } from "../../utils/date-util";
import { getImageUrl } from "../../utils/getImageUrl-util";

export default function WeatherHeadline(){
  const {weatherData} = useWeatherContext();
  const {climateIcon, location, temperature, time } = weatherData;
    return (
      <>
        <div>
          <div className="max-md:flex items-center justify-between md:-mt-10">
            <img src={getImageUrl(`${climateIcon}.png`)} alt="cloud" height="70" width="70"/>
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