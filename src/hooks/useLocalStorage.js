import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(favorites));
    },[favorites, storageKey]);

    return [favorites, setFavorites];
};

export default useLocalStorage;