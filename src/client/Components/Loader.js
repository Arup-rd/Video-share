import React from 'react';

const Loader = (props) => (
  <div className={`text-center mt-5 pt-5 ${props.className && props.className}`}>
    <i className="fas fa-4x fa-spinner fa-spin"></i>
  </div>
)

export default Loader;