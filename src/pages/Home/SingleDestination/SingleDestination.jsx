

import bookMarkHeartImg from '../../../assets/card/heart.png'
import star_Img from '../../../assets/card/star.png'

const SingleDestination = ({singleDestinationData}) => {
    console.log(singleDestinationData);
    const {location_name,img,price, available_date } = singleDestinationData || {};
    console.log(available_date);
    const startDate = available_date[0];
    const endDate = available_date[2];
    console.log(startDate, endDate);
    return (
        <div className=' w-[313px] h-[397px] relative '>
            <figure className='w-[313px] h-[290px] rounded-[8px] border '>
                <img className='rounded-[8px] h-full w-full ' src={img} alt="" />
            </figure>
            <img className='absolute top-4 right-4 cursor-pointer ' src={bookMarkHeartImg} alt="" />
            <div className='flex items-center justify-between mt-[8px]'>
                <h3 className='font-semibold'>{location_name}</h3>
                <p className='flex items-center gap-2'>
                    <img src={star_Img} alt="" />
                    <span>4.83</span>
                </p>
            </div>
            <p className='text-[12px] text-[#717171] mt-0'>2,776 kilometers away</p>
            <p className='text-[12px] text-[#717171] mt-0'>{startDate} - {endDate}</p>
            <p className='font-semibold'>${price} night</p>
        </div>
    );
};

export default SingleDestination;