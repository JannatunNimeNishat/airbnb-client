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
        axios.get(`http://localhost:5000/destinations_by_category/${destinationValue}`)
            .then(res => {
                // console.log('filter by catagory', res.data);
                setDestinationState(res?.data)
            })
            .catch(error => console.log(error))
    };

    // get destinations by search values
    const getDestinationsBySearchValues = (searchValues) => {
        console.log('search value', searchValues);
        axios.post(`http://localhost:5000/destinations_by_search_value`, searchValues)
            .then(res => {
                console.log('filter by search value: ', res.data);
                setDestinationState(res?.data)
            })
            .catch(error => console.log(error))
    };


    const value = {
        destinationState,
        getDestinationsByCategory,
        getDestinationsBySearchValues,
    }
    return (
        <DestinationContext.Provider value={value}>
            {children}
        </DestinationContext.Provider>
    );
};

export default DestinationProvider;