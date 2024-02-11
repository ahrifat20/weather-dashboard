import { favouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({children}) => {
    const [favorites, setFavourites] = useLocalStorage("favorites", []);

    const addToFavorites = (latitude, longitude, location) => {
        setFavourites([
            ...favorites,
            {latitude: latitude, longitude: longitude, location: location}
        ]);
    };
    const removeFromFavourites = (location) => {
        const restFavourites = favorites.filter((fav) => fav.location !== location);
        setFavourites(restFavourites);
    };
    return (
        <favouriteContext.Provider value={{addToFavorites, removeFromFavourites, favorites}}>
          {children}
        </favouriteContext.Provider>
    );
}

export default FavouriteProvider;