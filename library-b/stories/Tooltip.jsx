import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

/**
 * Primary UI component for user interaction
 */
export const Tooltip = ({ label }) => {
  return (
    <div className="Tooltip">
      {label}
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * Tooltip contents
   */
  label: PropTypes.string.isRequired
};
