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
    const getDestinationsByCategory = (destinationValue) => {
        setDestinationState([])
    axios.get(`http://localhost:5000/destinations_by_category/${destinationValue}`)
        .then(res => {
            console.log('filter by catagory',res.data);
            setDestinationState(res?.data)
        })
        .catch(error => console.log(error))
    };

const value = {
    destinationState,
    getDestinationsByCategory

}
return (
    <DestinationContext.Provider value={value}>
        {children}
    </DestinationContext.Provider>
);
};

export default DestinationProvider;