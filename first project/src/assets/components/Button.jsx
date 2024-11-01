import PropTypes from 'prop-types';

const Button = ({fontSize, bgColor,drobShedow, textColor, rounded, paddings, text, hover, hoverText}) => {
  return (
    <button className= {`${bgColor} ${textColor} ${fontSize}  ${drobShedow} ${rounded} ${paddings} ${textColor} ${hover} ${hoverText} transition-all duration-300 ease-in-out font-open-sans  flex-shrink-0  filter `}>{text}</button>
  )
}
Button.propTypes = {
  fontSize: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  drobShedow: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
  paddings: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired
}
export default Button