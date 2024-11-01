import PropTypes from 'prop-types';

const AboutProps = ({header, text, image, flexDirection, bg, position, marginTb }) => {
  return (

      <div className={`flex ${flexDirection} ${marginTb} justify-around items-center relative`}>
        <div>
        {bg && <img className={position} src={bg} alt="bg" />}
        </div>
        <div className='z-50'>
          <h1 className="text-[#00252E] font-poppins text-[40px] font-bold leading-[60px]">{header}</h1>
          <p className="text-custom-dark font-open-sans text-[16px] font-normal leading-[24px]  w-[520px]">{text}</p>
        </div>
        <img src={image} alt="wtf" />
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