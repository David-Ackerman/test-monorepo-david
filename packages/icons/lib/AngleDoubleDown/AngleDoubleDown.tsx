import React from 'react';
import { IconsProps } from '../types';

/**
 * @export
 * @component
 * @name AngleDoubleDown
 */

export const AngleDoubleDown = ({
  width,
  color = '#000',
  height = '',
}: IconsProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 32 32">
    <path
      fill={color}
      d="M 5.21875 6.6875 L 3.78125 8.09375 L 16 20.3125 L 28.21875 8.09375 L 26.78125 6.6875 L 16 17.46875 Z M 5.21875 13.6875 L 3.78125 15.09375 L 16 27.3125 L 28.21875 15.09375 L 26.78125 13.6875 L 16 24.46875 Z"
    />
  </svg>
);
