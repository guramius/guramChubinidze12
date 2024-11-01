import Button from './Button'
const Community = () => {
  return (
    <>
        <div className='text-center my-[260px]'>
            <h1 className="text-[#00252E] mb-[42px] font-poppins text-[40px] font-bold leading-[60px]">Ready To Build Your Community?</h1>
            <Button 
              text='Get Started For Free'
              fontSize='text-xl'
              textColor='text-white'
              bgColor='bg-[#FF52C1]'
              rounded='rounded-[40px]'
              drobShedow=' drop-shadow-[0px_6px_13px_rgba(0,37,46,0.22)]'
              paddings='py-[25px] px-[100px]'
              hover="hover:bg-[#FF8ED7]"
            />            
        </div>

    </>
  )
}

export default Community