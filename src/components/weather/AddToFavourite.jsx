import { useEffect, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { useFavouritesContext, useWeatherContext } from "../../hooks";

export default function AddToFavourite(){
  const [isFavourite, setIsFavourite] = useState(false);
  const {addToFavorites, removeFromFavourites, favorites} = useFavouritesContext();
  const {weatherData} = useWeatherContext();
  const {latitude, longitude, location} = weatherData;

  const handleFavourite = () => {
    setIsFavourite((prev) => !prev);
    const found = favorites.find((fav) => fav.location === location);
    if(!found) {
      addToFavorites(latitude, longitude, location);
    }else {
      removeFromFavourites(location);
    }
  };
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavourite(found);
  },[]);
  
    return (
      <>
        <div className="md:col-span-2">
          <div className="flex items-center justify-end space-x-6">
            <button 
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={handleFavourite}
            >
              <span>Add to Favourite</span>
              <img src={isFavourite ? RedHeart : heart} alt="favourite icon" />
            </button>
          </div>
        </div>
      </>
    );
}