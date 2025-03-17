import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import { DialogOverlay, DialogContent } from '@radix-ui/react-dialog'

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      line-height: 1.2;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: 32%;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;

    input,
    textarea {
      width: 100%;
      padding: 1rem;
    }

    .tag-input {
      max-width: 15rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;

    div {
      margin-bottom: 1.5rem;

      h2 {
        font-size: 1.6rem;
        margin-left: 0;
      }
    }

    form {
      gap: 1rem;
    }
  }
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
  max-width: 40rem;
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
