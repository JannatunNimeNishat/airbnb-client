import axios from "axios";
import { setDate } from "date-fns";
import { createContext, useEffect, useState } from "react";

export const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {

    // global state
    const [destinationState, setDestinationState] = useState([]);

    // showPlacesValue state
    const [showPlacesValue, setShowPlacesValue] = useState(destinationState?.length);

    // all destinations
    const [data, getData] = useState([]);

    // fetch all destinations
    useEffect(() => {
        axios.get('https://airbnb-server-virid.vercel.app/all_destinations')
            .then(res => {
                getData(res?.data)
                setDestinationState(res.data);
            })
            .catch(error => console.log(error))
    }, [])



    console.log('all destinations', data);
    // get destinations by category
    const getDestinationsByCategory = (destinationValue) => {
        axios.get(`https://airbnb-server-virid.vercel.app/destinations_by_category/${destinationValue}`)
            .then(res => {

                setDestinationState(res?.data)
            })
            .catch(error => console.log(error))
    };

    // get destinations by search values
    const getDestinationsBySearchValues = (searchValues) => {
        console.log('search value', searchValues);
        axios.post(`https://airbnb-server-virid.vercel.app/destinations_by_search_value`, searchValues)
            .then(res => {
                console.log('filter by search value: ', res.data);
                setDestinationState(res?.data)
            })
            .catch(error => console.log(error))
    };

    // dynamic modal real time filter to find length
    const getDynamicModalRealTimeData = (dynamicModalFilterValue) => {

        const { bathRoomChoice, bedChoice, bedRoomChoice, price_range, propertyValue } = dynamicModalFilterValue[0] || {};
        if (price_range[1] === undefined) {
            return;
        }

        console.log('propertyValue: ', propertyValue);

        const finalResult = data?.filter(destination => (destination.price >= price_range[0] && destination.price <= price_range[1])
            && (bathRoomChoice !== 0 ? destination.bathrooms >= bathRoomChoice : true)
            && (bedChoice !== 0 ? destination.bedrooms >= bedChoice : true)
            && (bedRoomChoice !== 0 ? destination.beds >= bedRoomChoice : true)
            && (propertyValue[0]['home'] !== 0 ? destination.property_type?.includes('home') : true)
            && (propertyValue[0]['apartment'] !== 0 ? destination.property_type?.includes('apartment') : true)
            && (propertyValue[0]['guesthouse'] !== 0 ? destination.property_type?.includes('guesthouse') : true)

        );

        setShowPlacesValue(finalResult.length)

    }

    // dynamic modal real time filter
    const getFilteredDestinations = (dynamicModalFilterValue) => {

        const { bathRoomChoice, bedChoice, bedRoomChoice, price_range, propertyValue } = dynamicModalFilterValue[0] || {};
        if (price_range[1] === undefined) {
            return;
        }

        console.log('propertyValue: ', propertyValue);

        const finalResult = data?.filter(destination => (destination.price >= price_range[0] && destination.price <= price_range[1])
            && (bathRoomChoice !== 0 ? destination.bathrooms >= bathRoomChoice : true)
            && (bedChoice !== 0 ? destination.bedrooms >= bedChoice : true)
            && (bedRoomChoice !== 0 ? destination.beds >= bedRoomChoice : true)
            && (propertyValue[0]['home'] !== 0 ? destination.property_type?.includes('home') : true)
            && (propertyValue[0]['apartment'] !== 0 ? destination.property_type?.includes('apartment') : true)
            && (propertyValue[0]['guesthouse'] !== 0 ? destination.property_type?.includes('guesthouse') : true)

        );
        setDestinationState(finalResult)
    }

    const value = {
        destinationState,
        getDestinationsByCategory,
        getDestinationsBySearchValues,
        getDynamicModalRealTimeData,
        showPlacesValue,
        getFilteredDestinations
    }

    return (
        <DestinationContext.Provider value={value}>
            {children}
        </DestinationContext.Provider>
    );
};

export default DestinationProvider;