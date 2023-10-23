import PropTypes from 'prop-types';

const MoreIcon = ({ size, color }) => {
  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
  };
  return (
    <span style={iconStyle}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 426.667 426.667"
        style={{ enableBackground: 'new 0 0 426.667 426.667' }}
        xmlSpace="preserve"
        fill={color}
      >
        <g>
          <g>
            <circle cx="42.667" cy="213.333" r="42.667" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="213.333" cy="213.333" r="42.667" />
          </g>
        </g>
        <g>
          <g>
            <circle cx={384} cy="213.333" r="42.667" />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </span>
  );
};

MoreIcon.propTypes = {
  size: PropTypes.node,
  color: PropTypes.node,
};

export default MoreIcon;
