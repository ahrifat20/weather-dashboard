import { useState } from "react";
import { locationContext } from "../context";

const LocationProvider = ({children}) => {
    const [searchLocation, setSearchLocation] = useState("");

    return (
        <locationContext.Provider value={{searchLocation, setSearchLocation}}>
            {children}
        </locationContext.Provider>
    )
}

export default LocationProvider;