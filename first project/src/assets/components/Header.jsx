import Button from "./Button"
import logo from "../components/img/transparent.png"

const Header = () => {
  return (
    <div className="flex justify-between items-center md:pt-[79px] md:pr-[63px] md:pb-[200px] md:pl-[80px]  lg-custom:pt-[24px] lg-custom:pr-[24px] lg-custom:pb-[24px] lg-custom:pl-[24px]">
        <img className="md:w-[240px] md:h-auto lg-custom:h-[16px] lg-custom:w-[96px]" src={logo} alt="" /> 
        <Button
          fontSize="md:text-base lg-custom:text-[9px]"
          text="Try It Free"
          textColor="text-[#FF52C1]"
          rounded=" border border-[#FF52C1] rounded-[20px]"
          drobShedow="shadow-[0px_0px_9px_0px_rgba(255,82,193,0.22)]"
          paddings="md:py-[9px] md:px-[30px] lg-custom:py-[5px] lg-custom:px-[18px]" 
          hover="hover:border-[#FF8ED7]"
          hoverText= "hover:text-[#FF8ED7]"
        />
    </div>
  )
}

export default Header;