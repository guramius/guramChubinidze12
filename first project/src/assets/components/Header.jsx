import Button from "./Button"
import logo from "../components/img/transparent.png"

const Header = () => {
  return (
    <div className="flex justify-between pt-[79px] pr-[63px] pb-[200px] pl-[80px]">
        <img src={logo} alt="" />
        <Button
          fontSize="text-3xl	"
          text="Try It Free"
          textColor="text-[#FF52C1]"
          rounded=" border-[#FF52C1]"
        />
    </div>
  )
}

export default Header;