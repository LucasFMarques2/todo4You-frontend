import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 1.7rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.BLUE_200};
  border-radius: 8px;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.8;
  }
`
