
import main_logo from '../../../assets/navbar/main_logo.png';
import search_logo from '../../../assets/navbar/search_icon.png'
import world_logo from '../../../assets/navbar/world.png'
import hamburger_logo from '../../../assets/navbar/hamburger.png'
import user_logo from '../../../assets/navbar/user_logo.png'
import { useState } from 'react';
// 
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
// 
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {

    const [activeTab, setActiveTab] = useState(1);

    const [showSearchOptions, setShowSearchOptions] = useState(false);

    // location
    const [location, setLocation] = useState('');

    // date
    const [dateState, setDateState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }
    ])
    // guest
    const [gust, setGuest] = useState([
        {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
        }
    ])
    
    const totalGust = gust[0].adults + gust[0].children + gust[0].infants + gust[0].pets;
    const startDate = format(dateState[0]?.startDate, 'MMM d');
    const endDate = format(dateState[0]?.endDate, 'MMM d');
    /*  console.log('start date',format(dateState[0]?.startDate, 'MMM d'));
     console.log('end date',format(dateState[0]?.endDate, 'MMM d'));
     console.log(dateState[0]?.startDate); */

    const handleSearch = () => {
        setActiveTab(0)
        setShowSearchOptions(!showSearchOptions);
        const finalSearch = {
            location,
            startDate,
            endDate,
            totalGust
        }
        console.log('finalSearch: ', finalSearch);
    }

    return (

        <div className={`${!showSearchOptions && 'shadow'}`}>

            {/* <nav className={`${showSearchOptions ? 'h-[400px]' : '' }  flex   justify-between my-container p-4`}> */}
            <nav className={` flex items-center  justify-between my-container ${showSearchOptions ? 'p-4' : 'p-4'}  `}>
                {/* logo */}
                <figure>
                    <img src={main_logo} alt="" />
                </figure>

                {/* search */}
                <div className={`${showSearchOptions ? 'hidden' : 'flex '} cursor-pointer h-[48px] rounded-[48px]  items-center  gap-3 border shadow-lg`}
                    onClick={() => setShowSearchOptions(true)}
                >

                    <h3 className='pl-[24px] font-semibold'>Anywhere</h3>
                    <div className='h-6 w-[2px] bg-[#DDD]'></div>
                    <h3 className='font-semibold'>Any week</h3>
                    <div className='h-6 w-[2px] bg-[#DDD]'></div>

                    <div className='flex items-center justify-evenly gap-3 pr-[12px]'>
                        {/* <input className='w-3/5 ' type="text" placeholder='Add guests' name="" id="" /> */}
                        <p className='text-[#717171]'>Add guests</p>
                        <img className='' src={search_logo} alt="" />
                    </div>
                </div>

                {/* details search */}
                <div className={`${showSearchOptions ? '' : 'hidden'} transition-all`}
                    onClick={() => setShowSearchOptions(false)}
                >
                    <div className='flex gap-[24px] justify-center '>
                        <h4 className='text-[#717171] cursor-pointer  hover:text-[#3e3d3d] hover:font-semibold'>Stays</h4>
                        <h4 className='text-[#717171] cursor-pointer hover:text-[#3e3d3d] hover:font-semibold'>Experiences</h4>
                        <h4 className='text-[#717171] cursor-pointer hover:text-[#3e3d3d] hover:font-semibold'>Online Experiences</h4>
                    </div>

                </div>



                {/* account */}
                <div className='flex items-center gap-4'>
                    <h3 className='font-semibold'>Become a host</h3>
                    <img src={world_logo} alt="" />

                    <div className='w-[84px] h-[44px] border rounded-[48px] flex items-center justify-center  gap-2 pl-[20px] py-[4px] pr-[8px]'>
                        <img className='h- w-' src={hamburger_logo} alt="" />
                        <img className='h-[30px] w-[30px]' src={user_logo} alt="" />
                    </div>
                </div>

            </nav>


            {/* tab heads */}
            <div className={`${showSearchOptions ? 'flex justify-between items-center px-3 ' : 'hidden'}  h-[66px] w-[800px] mx-auto rounded-[48px] border mt-[20px] bg-[#e6e6e6] transition-all`}>
                {/* where */}
                <div className={`${activeTab === 1 ? 'bg-white  hover:bg-white' : 'hover:bg-[#dddddd]'} rounded-[48px]  cursor-pointer `}
                    onClick={() => setActiveTab(1)}
                >
                    <p className='font-semibold pl-3  '>Where</p>
                    <input className='block pl-3 w-3/4 pb-1 bg-transparent outline-none' type="text" placeholder='Search destinations' name="" id=""
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>

                {/* Check in */}
                <div className={`${activeTab === 2 ? 'bg-white  hover:bg-white ' : 'hover:bg-[#dddddd]'} rounded-[48px]    w-[131px] cursor-pointer`}
                    onClick={() => setActiveTab(2)}
                >
                    <p className='ml-5 font-semibold'>Check in</p>

                    {/* <p className='ml-5 text-[#717171]'>Check in</p> */}
                    {/* <p className='ml-5 text-[#717171]'>{format(dateState[0]?.startDate, 'MMM d')}</p> */}
                    {
                        startDate ?
                            <p className='ml-5 text-[#717171]'>{format(dateState[0]?.startDate, 'MMM d')}</p>
                            :
                            <p className='ml-5 text-[#717171]'>Add dates</p>

                    }
                </div>

                {/* Check out */}
                <div className={`${activeTab === 4 ? 'bg-white  hover:bg-white ' : 'hover:bg-[#dddddd]'} rounded-[48px]    w-[131px] cursor-pointer`}
                    onClick={() => setActiveTab(4)}
                >
                    <p className='ml-5 font-semibold'>Check out</p>
                    {
                        endDate ?
                            <p className='ml-5 text-[#717171]'>{format(dateState[0]?.endDate, 'MMM d')}</p>
                            :
                            <p className='ml-5 text-[#717171]'>Add dates</p>

                    }

                </div>



                {/* <div className='h-6 w-[2px] bg-[#DDD]'></div> */}

                {/* Who */}
                <div className={`${activeTab === 3 ? 'bg-white  hover:bg-white ' : 'hover:bg-[#dddddd]'} rounded-[48px]    w-[131px] cursor-pointer`}
                    onClick={() => setActiveTab(3)}>
                    <p className='font-semibold ml-5'>Who</p>
                    {
                        totalGust === 0 ?

                            <p className='text-[#717171] ml-5'>Add guests</p>
                            :
                            <p className='text-[#717171] ml-5'>{totalGust} guest</p>
                    }
                </div>
                {
                    totalGust !== 0 ?
                        <p className='text-[12px] -ml-12 cursor-pointer font-semibold'
                            onClick={() => setGuest(
                                [
                                    {
                                        adults: 0,
                                        children: 0,
                                        infants: 0,
                                        pets: 0,
                                    }
                                ]
                            )}
                        >X</p>
                        :
                        <></>
                }

                {/* search icon */}
                <button onClick={handleSearch} className='bg-[#ff385c] text-white font-semibold flex items-center px-4 py-3 rounded-[48px]'>
                    <img src={search_logo} alt="" />
                    <span  >Search</span>
                </button>
            </div>


            {/* tab content tab -2 */}
            <div className={`${activeTab === 2 || activeTab === 4 ? 'w-[900px] mx-auto  rounded-[48px] shadow-2xl mt-5 relative' : 'hidden'}`}>
                <button onClick={() => setActiveTab(0)} className='absolute -right-6  -top-4 w-[30px] h-[30px] border-2 hover:bg-[#ff385c] hover:text-white hover:border-none   text-black bg-transparent  rounded-full flex items-center justify-center'>X</button>
                <DateRangePicker
                    onChange={item => setDateState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={dateState}
                    direction="horizontal"
                    preventSnapRefocus="disabled"

                />
            </div>

            {/* tab content tab - 3 */}
            <div className={`${activeTab === 3 ? 'w-[400px] ml-[700px] bg-white border   rounded-[48px]  mt-5 relative' : 'hidden'}`}>
                <button onClick={() => setActiveTab(0)} className='absolute  w-[30px] h-[30px] border-2 hover:bg-[#ff385c] hover:text-white hover:border-none   text-black bg-transparent  rounded-full flex items-center justify-center -right-3 -top-4'>X</button>
                <div className='px-6 py-3'>

                    {/* adults */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-semibold'>Adults</p>
                            <p className='text-[#717171]'>Ages 13 or above</p>
                        </div>
                        <div className='flex gap-3 items-center'>

                            <button className={` ${gust[0].adults <= 0 && 'disabled:opacity-75'}  h-8 w-8 rounded-full border flex items-center justify-center`}

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            adults: gust[0]?.adults <= 0 ? 0 : gust[0]?.adults - 1,
                                        }
                                    ]
                                )}

                            >
                                <AiOutlineMinus className='h-5 w-5 ' />
                            </button>
                            <p>{gust[0]?.adults}</p>
                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            adults: gust[0]?.adults + 1,
                                        }
                                    ]
                                )}

                            >
                                <AiOutlinePlus className='h-5 w-5 ' />
                            </p>
                        </div>
                    </div>
                    <hr className='my-4' />

                    {/* Children */}
                    <div className='flex justify-between items-center '>
                        <div>
                            <p className='font-semibold'>Children</p>
                            <p className='text-[#717171]'>Ages 2 - 12</p>
                        </div>
                        <div className='flex gap-3 items-center'>

                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            children: gust[0]?.children <= 0 ? 0 : gust[0]?.children - 1,
                                        }
                                    ]
                                )}

                            >
                                <AiOutlineMinus className='h-5 w-5 ' />
                            </p>
                            <p>{gust[0]?.children}</p>
                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            children: gust[0]?.children + 1,
                                        }
                                    ]
                                )}
                            >
                                <AiOutlinePlus className='h-5 w-5 ' />
                            </p>
                        </div>
                    </div>
                    <hr className='my-4' />

                    {/* Infants */}
                    <div className='flex justify-between items-center '>
                        <div>
                            <p className='font-semibold'>Infants</p>
                            <p className='text-[#717171]'>Under 2</p>
                        </div>
                        <div className='flex gap-3 items-center'>

                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            infants: gust[0]?.infants - 1 <= 0 ? 0 : gust[0]?.infants - 1,
                                        }
                                    ]
                                )}
                            >
                                <AiOutlineMinus className='h-5 w-5 ' />
                            </p>
                            <p>{gust[0]?.infants}</p>
                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            infants: gust[0]?.infants + 1,
                                        }
                                    ]
                                )}
                            >
                                <AiOutlinePlus className='h-5 w-5 ' />
                            </p>
                        </div>
                    </div>
                    <hr className='my-4' />
                    {/* Pets */}
                    <div className='flex justify-between items-center mb-3'>
                        <div>
                            <p className='font-semibold'>Pets</p>
                            <p className='text-[#717171] underline'>Bringing a service animal?</p>
                        </div>
                        <div className='flex gap-3 items-center'>

                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'

                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            pets: gust[0]?.pets - 1 <= 0 ? 0 : gust[0]?.pets - 1,
                                        }
                                    ]
                                )}
                            >
                                <AiOutlineMinus className='h-5 w-5 ' />
                            </p>
                            <p>{gust[0]?.pets}</p>
                            <p className='h-8 w-8 rounded-full border flex items-center justify-center'
                                onClick={() => setGuest(
                                    [
                                        {
                                            ...gust[0],
                                            pets: gust[0]?.pets + 1,
                                        }
                                    ]
                                )}

                            >
                                <AiOutlinePlus className='h-5 w-5 ' />
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Navbar;