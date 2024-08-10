import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, spacing, } from '../../styles/theme';


export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  padding: ${spacing.lg};
`

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: ${spacing.lg};
`

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${spacing.md};
`

export const HomeLink = styled(Link)`
  padding: ${spacing.md} ${spacing.lg};
  background-color: ${colors.secondary};
  color: ${colors.white};
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background-color: ${colors.success};
  }
`