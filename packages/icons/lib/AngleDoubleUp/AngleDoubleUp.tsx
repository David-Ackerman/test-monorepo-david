import React from 'react';
import { IconsProps } from '../types';

/**
 * @export
 * @component
 * @name AngleDoubleUp
 */

export const AngleDoubleUp = ({
  width,
  height = '',
  color = '#000',
}: IconsProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 32 32">
    <path
      fill={color}
      d="M 16 4.6875 L 3.78125 16.90625 L 5.21875 18.3125 L 16 7.53125 L 26.78125 18.3125 L 28.21875 16.90625 Z M 16 11.6875 L 3.78125 23.90625 L 5.21875 25.3125 L 16 14.53125 L 26.78125 25.3125 L 28.21875 23.90625 Z"
    />
  </svg>
);
