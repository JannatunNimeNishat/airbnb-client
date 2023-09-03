import { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../../provider/DestinationProvider";

// 
import '../../pages/Home/Filter/Filter.css'
import { BiHome } from "react-icons/bi";
import apartment from '../../assets/modal/guest_house.png'
import guest_house from '../../assets/modal/guest_house.png'

//
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


const FilterModal = () => {

    const { destinationState, getFilteredDestinations, handleModalState, getDynamicModalRealTimeData2nd, showPlacesValueSM } = useContext(DestinationContext);


    // max price
    const maxPrice = destinationState?.reduce((max, p) => p?.price > max ? p?.price : max, destinationState[0]?.price);
    // console.log('maxPrice', maxPrice, typeof maxPrice);


    const [priceSliderValue2nd, setPriceSliderValue2nd] = useState([0, maxPrice || 400]);



    // modal
    // const [showModal, setShowModal] = useState(false);

    // typeof place
    const [typeOfPlace2nd, setTypeOfPlace2nd] = useState(1);
    // bedroom
    const [bedRoomChoice2nd, setBedRoomChoice2nd] = useState(0);
    // beds
    const [bedChoice2nd, setBedChoice2nd] = useState(0);
    // bedroom
    const [bathRoomChoice2nd, setbathRoomChoice2nd] = useState(0);

    // property type 
    const [propertyValue2nd, setPropertyValue2nd] = useState(
        [
            {
                'home': 0,
                'apartment': 0,
                'guesthouse': 0,
            }
        ]
    );

    // handle Property type selection
    const handlePropertyTypeSelection = (property, value) => {

        if (property === 'home') {
            if (propertyValue2nd[0][property] === 0) {

                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        home: 1,
                    }
                ])
            }
            else {
                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        home: 0,
                    }
                ])
            }
        }
        else if (property === 'apartment') {
            if (propertyValue2nd[0][property] === 0) {

                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        apartment: 1,
                    }
                ])
            }
            else {
                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        apartment: 0,
                    }
                ])
            }
        }
        else if (property === 'guesthouse') {
            if (propertyValue2nd[0][property] === 0) {

                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        guesthouse: 1,
                    }
                ])
            }
            else {
                setPropertyValue2nd([
                    {
                        ...propertyValue2nd[0],
                        guesthouse: 0,
                    }
                ])
            }
        }
    }



    // dynamic modal real time filter
    useEffect(() => {

        const dynamicModalFilterValue = [
            {
                price_range: priceSliderValue2nd,
                bedRoomChoice: bedRoomChoice2nd,
                bedChoice: bedChoice2nd,
                bathRoomChoice: bathRoomChoice2nd,
                propertyValue: propertyValue2nd,

            }
        ]

        getDynamicModalRealTimeData2nd(dynamicModalFilterValue);

    }, [priceSliderValue2nd, bedRoomChoice2nd, bedChoice2nd, bathRoomChoice2nd, propertyValue2nd, getDynamicModalRealTimeData2nd])

    // handleFilterBtn
    const handleFilterBtn = () => {
        const dynamicModalFilterValue = [
            {
                price_range: priceSliderValue2nd,
                bedRoomChoice: bedRoomChoice2nd,
                bedChoice: bedChoice2nd,
                bathRoomChoice: bathRoomChoice2nd,
                propertyValue: propertyValue2nd,

            }
        ]
        getFilteredDestinations(dynamicModalFilterValue);
    }


    // clear all
    const handleClearAll = () => {
        setPriceSliderValue2nd(0, maxPrice || 400);
        setBedRoomChoice2nd(0),
        setBedChoice2nd(0);
        setbathRoomChoice2nd(0);
    }


    return (

        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                {/* <!-- Modal backdrop --> */}
                <div className="fixed inset-0 bg-black opacity-50"></div>

                {/* <!-- Modal container --> */}
                <div className="bg-white rounded-lg w-[900px] max-h-4/5 overflow-hidden z-10">


                    {/* <!-- Modal header --> */}
                    <div className="  px-6 py-3 flex items-center
                            border border-solid border-slate-200
                            ">

                        <button
                            className="p-1 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={handleModalState}

                        >
                            <span className=" text-black  h-8 w-8 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>

                        <h3 className="text-xl font-semibold  w-full text-center">
                            Filters
                        </h3>

                    </div>



                    {/* <!-- Modal body --> */}
                    {/* <div className="px-8 py-6 max-h-80 lg:max-h-96 overflow-x-hidden   overflow-auto"> */}
                    <div className="px-8 py-6 max-h-80 lg:max-h-96    overflow-auto">

                        {/* <!-- Scrollable content goes here --> */}

                        {/* Type of Place */}
                        <div className="hidden lg:block">
                            <h3 className="text-2xl font-bold">Type of Places</h3>
                            <p className="mt-1">Search rooms, entire homes and more. Nightly prices don't include fees or taxes.</p>

                            <div className="w-[635px] h-[72px] border mx-5 my-4 rounded-2xl
                                flex justify-between
                                ">
                                {/* any type */}
                                <div className={`${typeOfPlace2nd === 1 ? 'bg-black text-white' : 'hover:border hover:border-black'} rounded-l-lg w-full flex flex-col items-center justify-center cursor-pointer`}
                                    onClick={() => setTypeOfPlace2nd(1)}
                                >
                                    <p className="font-semibold">Any type</p>
                                    <p>$590 avg.</p>
                                </div>
                                {/* room */}
                                <div className={`${typeOfPlace2nd === 2 ? 'bg-black text-white' : 'hover:border hover:border-black'}  w-full
                                     flex flex-col items-center justify-center cursor-pointer
                                    `}
                                    onClick={() => setTypeOfPlace2nd(2)}
                                >
                                    <p className="font-semibold">Room</p>
                                    <p>$114 avg.</p>
                                </div
                                >
                                {/* Entire home */}
                                <div className={`${typeOfPlace2nd === 3 ? 'bg-black text-white' : 'hover:border hover:border-black'} rounded-r-lg  w-full flex flex-col items-center justify-center cursor-pointer`}
                                    onClick={() => setTypeOfPlace2nd(3)}
                                >
                                    <p className="font-semibold">Entire home</p>
                                    <p>$686 avg.</p>
                                </div>
                            </div>
                            <hr />

                        </div>

                        {/* Price range */}
                        <div className="mt-5">

                            <h3 className="text-2xl font-semibold">Price range</h3>
                            
                             <RangeSlider className=' mt-8' min={0} max={maxPrice || 400} value={priceSliderValue2nd} onInput={setPriceSliderValue2nd}
                                id="range-slider-black"
                            />

                            <div className="mt-10 flex items-center gap-4 w-3/4 mx-auto">
                                <div className="w-[300px] h-[55px] border rounded-xl px-3 flex flex-col justify-center">
                                    <p>Minimum</p>
                                    <span>$ {priceSliderValue2nd[0]}</span>
                                </div>
                                <div className="w-6 h-[2px] bg-gray-300" />
                                <div className="w-[300px] h-[55px] border rounded-xl px-3 flex flex-col justify-center">
                                    <p>Minimum</p>
                                    <span>$ {priceSliderValue2nd[1]}</span>
                                </div>
                            </div>
                        </div>


                        <hr className="mt-8" />
                        {/* Rooms and beds */}
                        <div className="mt-5">
                            <h3 className="text-2xl font-semibold">Rooms and beds</h3>

                            {/* Bedrooms */}
                            <p className="my-5">Bedrooms</p>
                            <div className="flex gap-2 ">
                                <div className={`px-[35px] py-[15px]  ${bedRoomChoice2nd === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(0)}
                                >
                                    Any
                                </div>


                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(1)}
                                >
                                    1
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(2)}
                                >
                                    2
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(3)}
                                >
                                    3
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(4)}
                                >
                                    4
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(5)}
                                >
                                    5
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(6)}
                                >
                                    6
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(7)}
                                >
                                    7
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedRoomChoice2nd === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedRoomChoice2nd(8)}
                                >
                                    8+
                                </div>



                            </div>


                            {/* Beds */}
                            <p className="my-5">Beds</p>
                            <div className="flex gap-2 ">
                                <div className={`px-[35px] py-[15px]  ${bedChoice2nd === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(0)}
                                >
                                    Any
                                </div>


                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(1)}
                                >
                                    1
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(2)}
                                >
                                    2
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(3)}
                                >
                                    3
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(4)}
                                >
                                    4
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(5)}
                                >
                                    5
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(6)}
                                >
                                    6
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(7)}
                                >
                                    7
                                </div>
                                <div className={`px-[35px] py-[15px] ${bedChoice2nd === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setBedChoice2nd(8)}
                                >
                                    8+
                                </div>



                            </div>
                            {/* Bathrooms */}
                            <p className="my-5">Bathrooms</p>
                            <div className="flex gap-2 ">
                                <div className={`px-[35px] py-[15px]  ${bathRoomChoice2nd === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(0)}
                                >
                                    Any
                                </div>


                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(1)}
                                >
                                    1
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(2)}
                                >
                                    2
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(3)}
                                >
                                    3
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(4)}
                                >
                                    4
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(5)}
                                >
                                    5
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(6)}
                                >
                                    6
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(7)}
                                >
                                    7
                                </div>
                                <div className={`px-[35px] py-[15px] ${bathRoomChoice2nd === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                    onClick={() => setbathRoomChoice2nd(8)}
                                >
                                    8+
                                </div>



                            </div>

                        </div>

                        <hr className="mt-8" />
                        {/*Property type*/}
                        <div className="mt-5">
                            <h3 className="text-2xl font-semibold py-4">Property type</h3>
                            <div className="mt-3 flex gap-3 w-full">

                                <div className={`w-[400px] lg:w-[200px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start px-6  pt-3  ${propertyValue2nd[0].home === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}
                                    onClick={() => handlePropertyTypeSelection('home', 1)}

                                >
                                    <BiHome className="h-8 w-8 mt-2" />
                                    <p className="mt-5">Home</p>
                                </div>

                                <div className={`w-[167px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start  pl-4 pt-3 ${propertyValue2nd[0].apartment === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}
                                    onClick={() => handlePropertyTypeSelection('apartment', 1)}

                                >
                                    <img className="h-8 w-8  mt-2" src={apartment} alt="" />
                                    <p className="mt-5">Apartment</p>
                                </div>

                                <div className={`w-[167px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start pl-4 pt-3 ${propertyValue2nd[0].guesthouse === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}

                                    onClick={() => handlePropertyTypeSelection('guesthouse', 1)}
                                >
                                    <img className="h-8 w-8 mt-2" src={guest_house} alt="" />
                                    <p className="mt-5">Guesthouse</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className=" border border-solid border-slate-200 px-6 py-4 flex items-center justify-between">
                        <p className="underline font-bold"
                        onClick={handleClearAll}
                        >Clear all</p>
                        <button className="w-[172px] h-[50px] rounded-xl font-bold text-white bg-black"
                            onClick={handleFilterBtn}
                        >
                            <p
                                onClick={handleModalState}
                            >Show <span>{showPlacesValueSM}</span> places</p>

                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default FilterModal;