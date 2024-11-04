import Button from "./Button"
import tab from "./img/Group 41.png"
import people from "./img/people.png"
import messages from "./img/messages.png"
const Content = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center text-center lg-custom:px-[40px]">
            <h1 className="md:text-[48px] font-bold  text-[#00252E] font-poppins capitalize lg-custom:text-[24px]">build The Community Your Fans Will Love</h1>
            <p className="mt-[26px] mb-[49px] text-[#00252E] text-center md:text-[20px] w-[100%]  max-w-[600px] font-normal  font-open-sans lg-custom:text-[14px]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <Button 
                text='Get Started For Free'
                fontSize='md:text-xl '
                textColor='text-white'
                bgColor='bg-[#FF52C1]'
                rounded='rounded-[40px]'
                drobShedow=' drop-shadow-[0px_6px_13px_rgba(0,37,46,0.22)]'
                paddings='md:py-[25px] md:px-[100px] '
                hover="hover:bg-[#FF8ED7]"
            />
            <img className="my-[100px]" src={tab} alt="icone" />
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-around mb-[300px] lg-custom:flex-col lg-custom:items-center">
            <div>
                <img src={people} alt="icone" />
                <p className="text-[#00252E] font-open-sans md:text-[96px] font-bold lg-custom:text-[60px] ">1.4k+</p>
                <p className="text-[#808E9A] npm font-open-sans md:text-[24px] lg-custom:text-[15px] font-normal ">Communities Formed</p>
            </div>
            <div>
                <img src={messages} alt="icone" />
                <p className="text-[#00252E] font-open-sans md:text-[96px] font-bold lg-custom:text-[60px]">2.7m+</p>
                <p className="text-[#808E9A] font-open-sans md:text-[24px] lg-custom:text-[15px] font-normal ">Messages Sent</p>
            </div>
        </div>
    </>
  )
}

export default Content;