import React, {useContext} from 'react';
import {StyledIcon, StyledSVGIcon, StyledToken} from './Token.styled';
import {SizeIncreaseContext} from '@/app/page';

interface TokenProps {
  className?: string;
  abilityName?: string;
  // Size in mm
  iconSize?: number;
  tokenSize?: number;
  // Color in hex
  iconColor?: string;
  tokenColor?: string;
  // Icon shadow
  iconShadow?: boolean;
  // Extra padding
  padding?: string;
}

export const Token = ({
  className,
  abilityName,
  iconSize = 13,
  tokenSize = 19,
  iconColor,
  iconShadow = true,
  tokenColor,
  padding = '0',
}: TokenProps) => {
  const sizeIncrease = useContext(SizeIncreaseContext);
  return (
    <StyledToken
      $tokenSize={tokenSize + sizeIncrease}
      $tokenColor={tokenColor}
    >
      <StyledIcon
        className={
          className ? className : `ms ms-ability-${abilityName}`
        }
        $iconSize={iconSize}
        $iconColor={iconColor}
        $iconShadow={iconShadow}
        style={{padding: padding}}
      />
    </StyledToken>
  );
};

export const TokenSvg = ({
  children,
  iconSize = 13,
  tokenSize = 19,
  iconColor,
  iconShadow = true,
  tokenColor,
  padding = '0',
}: TokenProps & {children: React.ReactNode}) => {
  const sizeIncrease = useContext(SizeIncreaseContext);
  return (
    <StyledToken
      $tokenSize={tokenSize + sizeIncrease}
      $tokenColor={tokenColor}
    >
      <StyledSVGIcon
        as="div"
        $iconSize={iconSize}
        $iconColor={iconColor}
        $iconShadow={iconShadow}
        style={{padding: padding}}
      >
        {children}
      </StyledSVGIcon>
    </StyledToken>
  );
};
