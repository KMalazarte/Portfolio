import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './desktopContainer.js';
import MobileContainer from './mobileContainer.js'


const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
