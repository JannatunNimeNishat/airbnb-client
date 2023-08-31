import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import camp_logo from '../../../assets/filter/camp_logo.png';
import lack_font_logo from '../../../assets/filter/lack_font_logo.png';
import national_park_logo from '../../../assets/filter/national_park.png';
import cabin_logo from '../../../assets/filter/cabin.png';
import amazing_pools from '../../../assets/filter/amazing_pools.png';
import omg_logo from '../../../assets/filter/omg_logo.png';
import arrow_right_logo from '../../../assets/filter/arrow_right_logo.png';
import filter_logo from '../../../assets/filter/filter_logo.png';

import './Filter.css'
import { BiHome } from "react-icons/bi";
import apartment from '../../../assets/modal/apartment.png'
import guest_house from '../../../assets/modal/guest_house.png'


/* import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Navigation } from 'swiper/modules'; */



const Filter = () => {

    const [priceSliderValue, setPriceSliderValue] = useState([0, 1000]);
    console.log('slider value:', priceSliderValue);


    // const [swiperRef, setSwiperRef] = useState(null);


    // modal
    const [showModal, setShowModal] = useState(false);

    // typeof place
    const [typeOfPlace, setTypeOfPlace] = useState(1);
    // bedroom
    const [bedRoomChoice, setBedRoomChoice] = useState(0);
    // beds
    const [bedChoice, setBedChoice] = useState(0);
    // bedroom
    const [bathRoomChoice, setbathRoomChoice] = useState(0);

    // property type 
    const [propertyValue, setPropertyValue] = useState(
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

        /*  Object.keys(propertyValue[0]).forEach(function(key) {
          if (propertyValue[0][key] == 'test1') {
            alert('exists');
          }
          console.log(propertyValue[0][key]);
        }) */

        if (property === 'home') {
            if (propertyValue[0][property] === 0) {

                setPropertyValue([
                    {
                        ...propertyValue[0],
                        home: 1,
                    }
                ])
            }
            else {
                setPropertyValue([
                    {
                        ...propertyValue[0],
                        home: 0,
                    }
                ])
            }
        }
        else if (property === 'apartment') {
            if (propertyValue[0][property] === 0) {

                setPropertyValue([
                    {
                        ...propertyValue[0],
                        apartment: 1,
                    }
                ])
            }
            else {
                setPropertyValue([
                    {
                        ...propertyValue[0],
                        apartment: 0,
                    }
                ])
            }
        }
        else if (property === 'guesthouse') {
            if (propertyValue[0][property] === 0) {

                setPropertyValue([
                    {
                        ...propertyValue[0],
                        guesthouse: 1,
                    }
                ])
            }
            else {
                setPropertyValue([
                    {
                        ...propertyValue[0],
                        guesthouse: 0,
                    }
                ])
            }
        }
    }

    // category wise filter
    const handleCategoryFilter = (filterValue) => {
        console.log(filterValue);
    }

    return (
        <div className="my-container py-[28px]">

            {/* swiper slider */}
            <>
                {/* <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={5}
                freeMode={true}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                navigation={true}
                modules={[FreeMode,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img onClick={() => handleCategoryFilter('camping')} className="opacity-60 hover:opacity-100 cursor-pointer" src={camp_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('lack_font')} className="opacity-60 hover:opacity-100 cursor-pointer" src={lack_font_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('national_park')} className="opacity-60 hover:opacity-100 cursor-pointer" src={national_park_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('cabin')} className="opacity-60 hover:opacity-100 cursor-pointer" src={cabin_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('amazing_pools')} className="opacity-60 hover:opacity-100 cursor-pointer" src={amazing_pools} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('omg')} className="opacity-60 hover:opacity-100 cursor-pointer" src={omg_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('lack_font')} className="opacity-60 hover:opacity-100 cursor-pointer" src={lack_font_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('national_park')} className="opacity-60 hover:opacity-100 cursor-pointer" src={national_park_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('cabin')} className="opacity-60 hover:opacity-100 cursor-pointer" src={cabin_logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={() => handleCategoryFilter('amazing_pools')} className="opacity-60 hover:opacity-100 cursor-pointer" src={amazing_pools} alt="" />
                </SwiperSlide>
            </Swiper> */}
            </>

            <div className="flex justify-between items-center">
                <img onClick={() => handleCategoryFilter('camping')} className="opacity-60 hover:opacity-100 cursor-pointer" src={camp_logo} alt="" />
                <img onClick={() => handleCategoryFilter('lack_font')} className="opacity-60 hover:opacity-100 cursor-pointer" src={lack_font_logo} alt="" />

                <img onClick={() => handleCategoryFilter('national_park')} className="opacity-60 hover:opacity-100 cursor-pointer" src={national_park_logo} alt="" />

                <img onClick={() => handleCategoryFilter('cabin')} className="opacity-60 hover:opacity-100 cursor-pointer" src={cabin_logo} alt="" />


                <img onClick={() => handleCategoryFilter('amazing_pools')} className="opacity-60 hover:opacity-100 cursor-pointer" src={amazing_pools} alt="" />


                <img onClick={() => handleCategoryFilter('omg')} className="opacity-60 hover:opacity-100 cursor-pointer" src={omg_logo} alt="" />

                <div className="flex items-center  gap-5">
                    <img className="cursor-pointer" src={arrow_right_logo} alt="" />
                    <button className="h-[48px] w-[75px] flex items-center justify-center gap-2 rounded-[8px] border"
                        onClick={() => setShowModal(true)}
                    >
                        <img src={filter_logo} alt="" />
                        <p>Filter</p>
                    </button>
                </div>
            </div>

            {/* modal  start*/}
            {showModal ? (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50 ">
                        {/* <!-- Modal backdrop --> */}
                        <div className="fixed inset-0 bg-black opacity-50"></div>

                        {/* <!-- Modal container --> */}
                        <div className="bg-white rounded-lg w-[900px] max-h-4/5 overflow-hidden z-10">
                            {/* <div className="bg-white rounded-lg w-11/12 md:w-1/2 max-h-4/5 overflow-hidden z-10"> */}

                            {/* <!-- Modal header --> */}
                            <div className="  px-6 py-3 flex items-center
                            border border-solid border-slate-200
                            ">

                                <button
                                    className="p-1 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
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
                            <div className="px-8 py-6 max-h-96 overflow-x-hidden  overflow-auto">
                                {/* <div className="p-6 max-h-64 overflow-auto"> */}
                                {/* <!-- Scrollable content goes here --> */}

                                {/* Type of Place */}
                                <div>
                                    <h3 className="text-2xl font-bold">Type of Places</h3>
                                    <p className="mt-1">Search rooms, entire homes and more. Nightly prices don't include fees or taxes.</p>

                                    <div className="w-[635px] h-[72px] border mx-5 my-4 rounded-2xl
                                flex justify-between
                                ">
                                        {/* any type */}
                                        <div className={`${typeOfPlace === 1 ? 'bg-black text-white' : 'hover:border hover:border-black'} rounded-l-lg w-full flex flex-col items-center justify-center cursor-pointer`}
                                            onClick={() => setTypeOfPlace(1)}
                                        >
                                            <p className="font-semibold">Any type</p>
                                            <p>$590 avg.</p>
                                        </div>
                                        {/* room */}
                                        <div className={`${typeOfPlace === 2 ? 'bg-black text-white' : 'hover:border hover:border-black'}  w-full
                                     flex flex-col items-center justify-center cursor-pointer
                                    `}
                                            onClick={() => setTypeOfPlace(2)}
                                        >
                                            <p className="font-semibold">Room</p>
                                            <p>$114 avg.</p>
                                        </div
                                        >
                                        {/* Entire home */}
                                        <div className={`${typeOfPlace === 3 ? 'bg-black text-white' : 'hover:border hover:border-black'} rounded-r-lg  w-full flex flex-col items-center justify-center cursor-pointer`}
                                            onClick={() => setTypeOfPlace(3)}
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
                                    <RangeSlider className=' mt-8' min={0} max={10000} value={priceSliderValue} onInput={setPriceSliderValue}
                                        id="range-slider-black"
                                    />

                                    <div className="mt-10 flex items-center gap-4 w-3/4 mx-auto">
                                        <div className="w-[300px] h-[55px] border rounded-xl px-3 flex flex-col justify-center">
                                            <p>Minimum</p>
                                            <span>$ {priceSliderValue[0]}</span>
                                        </div>
                                        <div className="w-6 h-[2px] bg-gray-300" />
                                        <div className="w-[300px] h-[55px] border rounded-xl px-3 flex flex-col justify-center">
                                            <p>Minimum</p>
                                            <span>$ {priceSliderValue[1]}</span>
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
                                        <div className={`px-[35px] py-[15px]  ${bedRoomChoice === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(0)}
                                        >
                                            Any
                                        </div>


                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(1)}
                                        >
                                            1
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(2)}
                                        >
                                            2
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(3)}
                                        >
                                            3
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(4)}
                                        >
                                            4
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(5)}
                                        >
                                            5
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(6)}
                                        >
                                            6
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(7)}
                                        >
                                            7
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedRoomChoice === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedRoomChoice(8)}
                                        >
                                            8+
                                        </div>



                                    </div>


                                    {/* Beds */}
                                    <p className="my-5">Beds</p>
                                    <div className="flex gap-2 ">
                                        <div className={`px-[35px] py-[15px]  ${bedChoice === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(0)}
                                        >
                                            Any
                                        </div>


                                        <div className={`px-[35px] py-[15px] ${bedChoice === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(1)}
                                        >
                                            1
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(2)}
                                        >
                                            2
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(3)}
                                        >
                                            3
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(4)}
                                        >
                                            4
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(5)}
                                        >
                                            5
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(6)}
                                        >
                                            6
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(7)}
                                        >
                                            7
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bedChoice === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setBedChoice(8)}
                                        >
                                            8+
                                        </div>



                                    </div>
                                    {/* Bathrooms */}
                                    <p className="my-5">Bathrooms</p>
                                    <div className="flex gap-2 ">
                                        <div className={`px-[35px] py-[15px]  ${bathRoomChoice === 0 ? 'bg-black text-white' : 'hover:border-gray-400'}  border flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(0)}
                                        >
                                            Any
                                        </div>


                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 1 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(1)}
                                        >
                                            1
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 2 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(2)}
                                        >
                                            2
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 3 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(3)}
                                        >
                                            3
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 4 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(4)}
                                        >
                                            4
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 5 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(5)}
                                        >
                                            5
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 6 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(6)}
                                        >
                                            6
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 7 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(7)}
                                        >
                                            7
                                        </div>
                                        <div className={`px-[35px] py-[15px] ${bathRoomChoice === 8 ? 'bg-black text-white' : 'hover:border-gray-400'} border  flex items-center justify-center rounded-[48px] font-semibold cursor-pointer`}
                                            onClick={() => setbathRoomChoice(8)}
                                        >
                                            8+
                                        </div>



                                    </div>

                                </div>

                                <hr className="mt-8" />
                                {/*Property type*/}
                                <div className="mt-5">
                                    <h3 className="text-2xl font-semibold py-4">Property type</h3>
                                    <div className="mt-3 flex gap-3">

                                        <div className={`w-[167px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start pl-4 pt-3  ${propertyValue[0].home === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}
                                            onClick={() => handlePropertyTypeSelection('home', 1)}
                                        
                                        >
                                            <BiHome className="h-8 w-8 mt-2" />
                                            <p className="mt-5">Home</p>
                                        </div>

                                        <div className={`w-[167px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start  pl-4 pt-3 ${propertyValue[0].apartment === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}
                                            onClick={() => handlePropertyTypeSelection('apartment', 1)}
                                        
                                        >
                                            <img className="h-8 w-8  mt-2" src={apartment} alt="" />
                                            <p className="mt-5">Apartment</p>
                                        </div>

                                        <div className={`w-[167px] h-[124px] cursor-pointer rounded-2xl  border flex flex-col items-start pl-4 pt-3 ${propertyValue[0].guesthouse === 1 ? 'bg-[#f7f7f7]' : 'hover:border-gray-500'}`}
                                        
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
                                <p className="underline font-bold">Clear all</p>
                                <button className="w-[172px] h-[50px] rounded-xl font-bold text-white bg-black">
                                <p>Show <span>770</span> places</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </>

            ) : null}
            {/* modal  end */}

        </div>
    );
};

export default Filter;