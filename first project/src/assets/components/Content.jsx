import Button from "./Button"
import tab from "./img/Group 41.png"
import people from "./img/people.png"
import messages from "./img/messages.png"
const Content = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[48px] font-bold leading-[72px] text-[#00252E] font-poppins capitalize">build The Community Your Fans Will Love</h1>
            <p className="text-[#00252E] text-center text-[20px] w-full max-w-[600px] font-normal leading-[30px] font-open-sans w-4/12">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <Button />
            <img src={tab} alt="icone" />
        </div>
        <div className="flex justify-around mb-[300px]">
            <div>
                <img src={people} alt="" />
                <p className="text-[#00252E] font-open-sans text-[96px] font-bold leading-[144px]">1.4k+</p>
                <p className="text-[#808E9A] npm font-open-sans text-[24px] font-normal leading-[36px]">Communities Formed</p>
            </div>
            <div>
                <img src={messages} alt="icone" />
                <p className="text-[#00252E] font-open-sans text-[96px] font-bold leading-[144px]">2.7m+</p>
                <p className="text-[#808E9A] font-open-sans text-[24px] font-normal leading-[36px]">Messages Sent</p>
            </div>
        </div>
    </>
  )
}

export default Content;