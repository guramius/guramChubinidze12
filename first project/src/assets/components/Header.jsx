import logo from "../components/img/transparent.png"
const Header = () => {
  return (
    <div className="flex justify-between pt-[79px] pr-[63px] pb-[200px] pl-[80px]">
        <img src={logo} alt="" />
        <button  className="">Try it free</button>
    </div>
  )
}

export default Header;