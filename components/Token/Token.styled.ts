'use client';
import styled, {css} from 'styled-components';

interface StyledIconProps {
  // Size in mm
  $iconSize?: number;
  // Color in hex
  $iconColor?: string;
  // Shadow
  $iconShadow?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({$iconSize}) => $iconSize ?? 0}mm;
  color: ${({$iconColor}) => ($iconColor ? $iconColor : 'white')};
  text-shadow: ${({$iconShadow}) => $iconShadow && '-1px 1px #000'};
`;

export const StyledSVGIcon = styled(StyledIcon)`
  font-size: 0;
  width: ${({$iconSize}) => $iconSize ?? 0}px;
  height: ${({$iconSize}) => $iconSize ?? 0}px;
  filter: invert(1) drop-shadow(-1px 1px 0 #000);

  svg {
    width: 100%;
    height: 100%;
  }
`;

interface StyledTokenProps {
  // Size in mm
  $tokenSize?: number;
  // Color in hex
  $tokenColor?: string;
}

export const StyledToken = styled.div<StyledTokenProps>`
  width: ${({$tokenSize}) => $tokenSize ?? 0}mm;
  height: ${({$tokenSize}) => $tokenSize ?? 0}mm;
  background: ${({$tokenColor}) => $tokenColor};
  /* border-radius: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    z-index: 1;
    background: #0000002a;
    top: 50%;
    left: 50%;
  }
`;
