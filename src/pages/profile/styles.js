import styled from 'styled-components'

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 60rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 0 auto;
  height: 70vh;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      line-height: 1.2;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: auto;
      margin-right: auto;
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
    padding: 0 7rem;

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
    padding: 1.5rem 1rem;
    height: 85vh;
    div {
      margin-bottom: 1.5rem;

      h2 {
        font-size: 1.6rem;
        margin: 0 auto;
      }
    }

    form {
      gap: 1rem;
      padding: 0 2rem;
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 15px;
    right: 1px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: 12rem;

    > label {
      width: 3.6rem;
      height: 3.6rem;
      bottom: 10px;
      right: 0;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`
