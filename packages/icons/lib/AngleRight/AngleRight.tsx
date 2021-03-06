import React from 'react';
import { IconsProps } from '../types';

/**
 * @export
 * @component
 * @name AngleRight
 */

export const AngleRight = ({
  width,
  height = '',
  color = '#000',
}: IconsProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 32 32">
    <path
      fill={color}
      d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"
    />
  </svg>
);
