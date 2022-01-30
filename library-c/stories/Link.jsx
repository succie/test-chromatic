import React from 'react';
import './Link.css';

export const Link = ({ children }) => {
  return <a className="Link" href="#">{children}</a>;
};
