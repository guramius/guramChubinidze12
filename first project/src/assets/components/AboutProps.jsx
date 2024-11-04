import PropTypes from 'prop-types';

const AboutProps = ({header, text, image, flexDirection, bg, position, marginTb }) => {
  return (
    <div className={`flex ${flexDirection} ${marginTb} justify-around items-center relative  flex-col-reverse sm:flex-row`}>
          {bg ? <img style={bg ? {} : { display: 'none' }}className={`${position} w-[100%] lg-custom:h-[100%]`}src={bg} alt="bg" /> :null}
      <div className='z-50'>
        <h1 className="text-[#00252E] font-poppins lg:text-[40px] font-bold leading-[60px] md:text-[28px] sm:text-[20px]">{header}</h1>
        <p  className="text-custom-dark font-open-sans lg:text-[16px] font-normal leading-[24px]  lg:w-[520px] xl-custom:w-[400px] lg-custom:w-[320px] lg-custom:text-[14px]">{text}</p>
      </div>
      <img className="lg:w-[517px] lg-custom:w-[267px]" src={image} alt="wtf" />
    </div>
  )
}
 
AboutProps.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  flexDirection: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  marginTb: PropTypes.string.isRequired,
};

export default AboutProps;