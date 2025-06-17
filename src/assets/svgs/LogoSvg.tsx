import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {SvgProps} from './type';

const LogoSvg = ({width = 64, height = 64, color = '#D21F3C'}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.58 30.206c-5.618 4.226-15.152 10.71-15.152 6.07v-17.54c0-7.867 9.867-.156 15.442 4.828 2.002 1.79 1.853 5.03-.29 6.642zM59.496 9.743C56.205 3.813 47.152 0 30.695 0c-6.568 0-20.428 2.728-25.1 7.202-7.266 6.956-6.583 27.956-2.88 33.887 3.703 5.93 11.11 8.471 18.515 10.591 7.407 2.117 21.808 8.047 21.808 8.047l-3.29-7.2s11.52-.424 19.75-10.167c8.228-9.742 3.29-26.687 0-32.617z"
        fill={color}
      />
    </Svg>
  );
};

export default LogoSvg;
