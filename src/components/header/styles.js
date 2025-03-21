import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  position: relative;
  z-index: 10;
  grid-area: header;
  height: 10.5rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;

  @media (max-width: 768px) {
    height: 7rem;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 2.5rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 768px) {
    margin-left: -4rem;
    img {
      width: 3rem;
      height: 3rem;
    }
    div {
      line-height: 1.7rem;
      span {
        font-size: 1rem;
      }
      strong {
        font-size: 1.2rem;
      }
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 2.5rem;
      margin-right: -2rem;
    }
  }
`
export const Weather = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 5rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    &:first-of-type {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 3rem;
    }
    span {
      font-size: 1rem;
    }
    div {
      margin-top: 0.5rem;
    }
  }
`

export const InformationContainer = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`
