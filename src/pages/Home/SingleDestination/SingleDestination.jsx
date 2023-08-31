import cart_img from '../../../assets/card/card_img.webp'
import bookMarkHeartImg from '../../../assets/card/heart.png'
import star_Img from '../../../assets/card/star.png'
const SingleDestination = () => {
    return (
        <div className=' w-[313px] h-[397px] relative mt-8'>
            <figure className='w-[313px] h-[313px] rounded-[8px] border '>
                <img className='rounded-[8px] h-full w-full ' src={cart_img} alt="" />
            </figure>
            <img className='absolute top-4 right-4 cursor-pointer ' src={bookMarkHeartImg} alt="" />
            <div className='flex items-center justify-between mt-[8px]'>
                <h3 className='font-semibold'>MV, Maldives</h3>
                <p className='flex items-center gap-2'>
                    <img src={star_Img} alt="" />
                    <span>4.83</span>
                </p>
            </div>
            <p className='text-[12px] text-[#717171] mt-0'>2,776 kilometers away</p>
            <p className='text-[12px] text-[#717171] mt-0'>23-28 June</p>
            <p className='font-semibold'>Rs. 83,996 night</p>
        </div>
    );
};

export default SingleDestination;