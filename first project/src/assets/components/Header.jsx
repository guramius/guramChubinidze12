import Button from "./Button"
import logo from "../components/img/transparent.png"

const Header = () => {
  return (
    <div className="flex justify-between pt-[79px] pr-[63px] pb-[200px] pl-[80px]  lg-custom:pt-[24px] lg-custom:pr-[24px] lg-custom:pb-[24px] lg-custom:pl-[24px]">
        <img src={logo} alt="" /> 
        <Button
          fontSize="text-base"
          text="Try It Free"
          textColor="text-[#FF52C1]"
          rounded=" border border-[#FF52C1] rounded-[20px]"
          drobShedow="shadow-[0px_0px_9px_0px_rgba(255,82,193,0.22)]"
          paddings="py-[9px] px-[30px]" 
          hover="hover:border-[#FF8ED7]"
          hoverText= "hover:text-[#FF8ED7]"
        />
    </div>
  )
}

export default Header;