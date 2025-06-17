import {f, h, w} from '@src/common/sizes';
import {TextStyle} from 'react-native';

export const text_style: Record<
  'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl',
  TextStyle
> = {
  'xs': {
    fontSize: f(12),
    lineHeight: f(16),
  },
  'sm': {
    fontSize: f(14),
    lineHeight: f(20),
  },
  'base': {
    fontSize: f(16),
    lineHeight: f(24),
  },
  'lg': {
    fontSize: f(18),
    lineHeight: f(28),
  },
  'xl': {
    fontSize: f(20),
    lineHeight: f(28),
  },
  '2xl': {
    fontSize: f(24),
    lineHeight: f(32),
  },
  '3xl': {
    fontSize: f(30),
    lineHeight: f(36),
  },
  '4xl': {
    fontSize: f(36),
    lineHeight: f(40),
  },
  '5xl': {
    fontSize: f(48),
    lineHeight: f(48),
  },
  '6xl': {
    fontSize: f(60),
    lineHeight: f(60),
  },
};

export const textScaling = {
  '--fs-xs': f(12) + 'px',
  '--lh-xs': f(16) + 'px',
  '--fs-sm': f(14) + 'px',
  '--lh-sm': f(20) + 'px',
  '--fs-base': f(16) + 'px',
  '--lh-base': f(24) + 'px',
  '--fs-lg': f(18) + 'px',
  '--lh-lg': f(28) + 'px',
  '--fs-xl': f(20) + 'px',
  '--lh-xl': f(28) + 'px',
  '--fs-2xl': f(24) + 'px',
  '--lh-2xl': f(32) + 'px',
  '--fs-3xl': f(30) + 'px',
  '--lh-3xl': f(36) + 'px',
  '--fs-4xl': f(36) + 'px',
  '--lh-4xl': f(40) + 'px',
  '--fs-5xl': f(48) + 'px',
  '--lh-5xl': f(48) + 'px',
  '--fs-6xl': f(60) + 'px',
  '--lh-6xl': f(60) + 'px',
};

export const widthScaling = Object.fromEntries(
  Array.from({length: 1000}, (_, i) => [`--w-${i + 1}`, `${w(i + 1)}px`])
);
export const heightScalingW = Object.fromEntries(
  Array.from({length: 1000}, (_, i) => [`--wh-${i + 1}`, `${w(i + 1)}px`])
);
export const heightScaling = Object.fromEntries(
  Array.from({length: 1000}, (_, i) => [`--h-${i + 1}`, `${h(i + 1)}px`])
);
