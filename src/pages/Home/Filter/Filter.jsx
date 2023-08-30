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


/* import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Navigation } from 'swiper/modules'; */



const Filter = () => {

    /*  const [value, setValue] = useState([100, 100]);
     console.log('slider value:', value); */


    const [swiperRef, setSwiperRef] = useState(null);



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
                    <button className="h-[48px] w-[75px] flex items-center justify-center gap-2 rounded-[8px] border">
                        <img src={filter_logo} alt="" />
                        <p>Filter</p>
                    </button>
                </div>
            </div>


            {/*  <div className="title">Controlled</div>
            <RangeSlider value={value} onInput={setValue} /> */}
        </div>
    );
};

export default Filter;