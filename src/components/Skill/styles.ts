import styled, { css } from 'styled-components';

interface BallProps {
  completed?: boolean;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const Ball = styled.span<BallProps>`
  width: 2rem;
  height: 2rem;

  display: block;

  border-radius: 50%;

  background: #8B939C;

  ${props => props.completed && css`
    background: var(--primary);
  `}
`