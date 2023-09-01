import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {

    const [destinationState, setDestinationState] = useState([]);

    // fetch all destinations
    useEffect(() => {
        axios.get('http://localhost:5000/all_destinations')
            .then(res => setDestinationState(res.data))
            .catch(error => console.log(error))
    }, [])

    // get destinations by category
    

    const value = {
        destinationState,
        
    }
    return (
        <DestinationContext.Provider value={value}>
            {children}
        </DestinationContext.Provider>
    );
};

export default DestinationProvider;