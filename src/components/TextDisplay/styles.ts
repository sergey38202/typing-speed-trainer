import styled, { keyframes } from 'styled-components';
import { colors, spacing } from '../../styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TextContainer = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: ${spacing.lg};
  border-radius: 12px;
  background-color: ${colors.white};
  color: ${colors.darkGray};
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.lightGray};
  max-width: 100%;
  overflow-wrap: break-word;
  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2rem;
    padding: ${spacing.md};
  }
`;

export const CorrectText = styled.span`
  color: ${colors.success};
  font-weight: bold;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const IncorrectText = styled.span`
  color: ${colors.error};
  text-decoration: underline;
  font-weight: bold;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const RemainingText = styled.span`
  color: ${colors.lightGray};
  opacity: 0.7;
  animation: ${fadeIn} 0.2s ease-in-out;
`;
