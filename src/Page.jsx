import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { useWeatherContext } from "./hooks";

import { useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderstormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page(){
    const {weatherData, loading} = useWeatherContext();
    const [climateImage, setClimateImage] = useState("");

    const getClimateBackgroundImage = (climate) => {
        switch(climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatteredImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderstormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    };
    useEffect(() => {
        const getBgImage = getClimateBackgroundImage(weatherData.climate);
        setClimateImage(getBgImage);
    },[weatherData.climate]);
    return (
      <>
        <div className="grid place-items-center h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url('${climateImage}')`}}>
          {loading.state ? (
            <p className="text-2xl font-bold text-center">{loading.message}</p>
          ) : (
            <>
              <Header />
              <WeatherBoard />
            </>
          )}
        </div>
      </>
    );
}