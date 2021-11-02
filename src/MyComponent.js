import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      my new {name} ! <br />
      children 값은 {children} 이다! <br />
      my favorite number = {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'default name',
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
