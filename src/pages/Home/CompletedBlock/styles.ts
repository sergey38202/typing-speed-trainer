import { styled } from 'styled-components';

import { colors, spacing, breakpoints } from '../../../styles/theme';

export const ResultScreen = styled.div`
  text-align: center;
  background-color: ${colors.white};
  padding: ${spacing.lg};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
`;

export const ResultText = styled.p`
  font-size: 1.8rem;
  margin: ${spacing.md} 0;
  color: ${colors.darkGray};
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const RestartButton = styled.button`
  margin-top: ${spacing.lg};
  padding: ${spacing.md} ${spacing.lg};
  background-color: ${colors.success};
  color: ${colors.white};
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${colors.success};
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
    padding: ${spacing.sm} ${spacing.md};
  }
`;