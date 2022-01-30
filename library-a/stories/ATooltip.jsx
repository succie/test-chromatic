import React from 'react';
import PropTypes from 'prop-types';
import './ATooltip.css';

/**
 * Primary UI component for user interaction
 */
export const ATooltip = ({ label }) => {
  return (
    <div className="ATooltip">
      {label}
    </div>
  );
};

ATooltip.propTypes = {
  /**
   * ATooltip contents
   */
  label: PropTypes.string.isRequired
};
