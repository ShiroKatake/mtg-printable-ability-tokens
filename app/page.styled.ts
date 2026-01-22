import styled from 'styled-components';

interface StyledPageProps {
  $sizeIncrease: number;
}

export const StyledPage = styled.div<StyledPageProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    calc((19mm + ${({$sizeIncrease}) => $sizeIncrease}mm))
  );
  align-items: center;
  justify-items: center;
  padding: 10mm;
  font-family: var(--font-geist-sans);
  gap: 1px;
`;
