/**
|--------------------------------------------------
| Node Modules
|--------------------------------------------------
*/
import React from 'react';

/**
|--------------------------------------------------
| Local Modules
|--------------------------------------------------
*/
import { ActivityIndicatorProps } from './types';
import './styles.scss';

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
  // Map props
  const { size, color } = props;

  return (
    <svg
      style={{ width: size, height: size, color }}
      xmlns="http://www.w3.org/2000/svg"
      className="activity-indicator"
      viewBox="0 0 66 66"
      height="65px"
      width="65px"
    >
      <circle
        className="activity-indicator__path"
        strokeLinecap="round"
        strokeWidth="6"
        fill="none"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
};

ActivityIndicator.defaultProps = {
  size: 20,
};

export default ActivityIndicator;
