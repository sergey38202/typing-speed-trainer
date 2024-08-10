import styled from 'styled-components'
import { colors, spacing, breakpoints } from './styles/theme'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  padding: ${spacing.lg};
  color: ${colors.white};
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.md};
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${spacing.lg};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${colors.white};
  text-shadow: 2px 2px ${colors.darkGray};

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
    margin-bottom: ${spacing.md};
  }
`

export const InputField = styled.input`
  font-size: 1.5rem;
  padding: ${spacing.md};
  border: 2px solid ${colors.lightGray};
  border-radius: 8px;
  margin-top: ${spacing.lg};
  width: 100%;
  max-width: 600px;
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
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: ${spacing.lg};
  background-color: ${colors.white};
  padding: ${spacing.lg};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.md};
  }
`
