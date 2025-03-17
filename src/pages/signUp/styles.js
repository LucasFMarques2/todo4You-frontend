import styled from 'styled-components'
import backgroundImg from '../../assets/banner.svg'
import { FaCheckCircle } from 'react-icons/fa'
import { DialogOverlay, DialogContent } from '@radix-ui/react-dialog'

export const SingInContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const FormContainer = styled.form`
  padding: 5rem;
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;

  .erroSpan {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 1.4rem;
  }

  > h1 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    margin: 3rem 0;
  }

  > p {
    font-size: 1.2rem;
    color: rgb(224, 224, 224);
  }

  > a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    margin-top: 6.25rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
  }

  button {
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }

  @media (max-width: 48rem) {
    padding: 1.25rem;
    max-width: 100%;
    border-radius: 0.25rem;
  }

  @media (max-width: 30rem) {
    padding: 1rem;
    max-width: 90%;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  filter: brightness(0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const ModalOverlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContent = styled(DialogContent)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 2rem;
  width: 90%;
  max-width: 30rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const SuccessIcon = styled(FaCheckCircle)`
  font-size: 3rem;
  color: ${({ theme }) => theme.COLORS.GREEN};
  margin-bottom: 1rem;
`

export const ButtonClose = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  margin-top: 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`
