import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStreetView,
  faChartLine,
  faTools,
  faFlask
} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-solid-svg-icons';

export const ICON_TYPE = {
  USER: faStreetView,
  CHART: faChartLine,
  TOOLS: faTools,
  FLASK: faFlask,
  CONTACT: faComments
};

export const Icon = ({ icon, size, className }) => (
  <FontAwesomeIcon icon={icon} size={size} className={className} />
);

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(ICON_TYPE)).isRequired,
  size: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
