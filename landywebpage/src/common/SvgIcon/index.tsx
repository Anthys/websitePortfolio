import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, title }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} title={title} />
);
