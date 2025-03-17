import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
  border-top: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    margin-top: 2rem;
  }
`

export const TasksContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  max-height: calc(100vh - 50rem);
  overflow-y: auto;

  @media (max-width: 768px) {
    min-height: auto;
    max-height: none;
    width: 100%;
    margin: 1rem 0;
  }
`
export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: ${(props) =>
    props.$status === 'feito'
      ? props.theme.COLORS.GREEN // Usando verde para "feito"
      : props.$status === 'pendente'
        ? props.theme.COLORS.YELLOW // Usando amarelo para "pendente"
        : props.theme.COLORS.BLUE_100}; // Azul para "em andamento"
  color: ${(props) =>
    props.$status === 'em andamento'
      ? props.theme.COLORS.WHITE
      : props.theme.COLORS.BLACK};
  padding: 1.2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:nth-child(2) {
    margin-top: 4rem;
  }

  h4 {
    font-size: 2rem;
    margin: 0.5rem 0;
    span {
      font-weight: 700;
    }

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 2rem;
  }

  .tag {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    padding: 1rem 3rem;
    font-size: 1.2rem;
    display: inline-block;
    white-space: nowrap;
  }

  select {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 10rem;
    padding: 0.6rem;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.69);
    border: none;
    margin-right: 2rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
`

export const StyledDialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

export const StyledDialogContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 650px;
  border-radius: 8px;

  .DialogHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .DialogTitle {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .CloseButton {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    cursor: pointer;
  }

  .FormGroup {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    label {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    select {
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: ${({ theme }) => theme.COLORS.GRAY_700};
      width: 100%;
      outline: none;
      border: none;
      padding: 1.2rem;
      border-radius: 8px;
    }
  }

  .ButtonGroup {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;

    button {
      width: 48%;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      cursor: pointer;
      border: none;
      font-size: 1.5rem;
    }

    .DeleteButton {
      background-color: ${({ theme }) => theme.COLORS.RED};
    }

    .SaveButton {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }

  .TagStatusGroup {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .CancelButton {
    background: ${({ theme }) => theme.COLORS.BLUE_200};
    color: white;

    &:hover {
      background: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`

export const StyledDialogContentDeleteConfirmation = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  width: 80%;
  max-width: 40rem;
  border-radius: 0.8rem;
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK};

  .DialogHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .DialogTitle {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .CloseButton {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    cursor: pointer;
  }

  .ButtonGroup {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;

    button {
      width: 48%;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      cursor: pointer;
      border: none;
      font-size: 1.5rem;
    }

    .DeleteButton {
      background-color: ${({ theme }) => theme.COLORS.RED};
    }

    .CancelButton {
      background: ${({ theme }) => theme.COLORS.GRAY_100};
      color: white;

      &:hover {
        background: ${({ theme }) => theme.COLORS.GRAY_600};
      }
    }
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`
