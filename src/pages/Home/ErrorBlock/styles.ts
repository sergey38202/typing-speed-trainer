import { styled } from 'styled-components';

import { spacing, colors, breakpoints } from '../../../styles/theme';


export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: ${spacing.lg};
  background-color: ${colors.white};
  padding: ${spacing.lg};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.md};
  }
`;

export const InputField = styled.input`
  font-size: 1.5rem;
  padding: ${spacing.md};
  border: 2px solid ${colors.lightGray};
  border-radius: 8px;
  margin-top: ${spacing.lg};
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: ${colors.success};
    box-shadow: 0 0 8px ${colors.success};
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
    padding: ${spacing.sm};
    max-width: 100%;
  }
`;

export const WpmDisplay = styled.p`
  font-size: 1.8rem;
  margin-top: ${spacing.md};
  color: ${colors.darkGray};
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const ErrorDisplay = styled.p`
  font-size: 1.8rem;
  margin-top: ${spacing.md};
  color: ${colors.error};
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;