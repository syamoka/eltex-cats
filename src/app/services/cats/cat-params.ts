export type CatParams = {
  blur?: number;
  width?: number;
  height?: number;
  r?: number;
  g?: number;
  b?: number;
  brightness?: number;
  saturation?: number;
  hue?: number;
  lightness?: number;
  html?: boolean;
  json?: boolean;
  type?: Type;
  filter?: Filter;
  fit?: Fit;
  position?: Position;
};
type Type = 'square' | 'medium' | 'small' | 'xsmall';
type Filter = 'mono' | 'negate' | 'custom';
type Fit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
type Position =
  | 'top'
  | 'right top'
  | 'right'
  | 'right bottom'
  | 'bottom'
  | 'left bottom'
  | 'left'
  | 'left top'
  | 'center';
