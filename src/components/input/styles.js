import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 1rem;

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.GRAY_700};
    width: 100%;
    outline: none;
    border: none;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
  }

  textArea {
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    height: 20rem;
    width: 50rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
