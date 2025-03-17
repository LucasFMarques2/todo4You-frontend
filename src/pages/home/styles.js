import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 2.4rem;
  overflow-y: auto;

  > span {
    display: block;
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  > li {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    list-style: none;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    &.selected {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const Search = styled.div`
  grid-area: search;
  display: flex;
  padding: 6.4rem 6.4rem 0;
  align-items: center;
  input {
    padding: 1rem;
  }
  svg {
    margin-top: 1.1rem;
  }
`
export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
  text-align: center;
  margin-top: 5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  overflow: hidden;
`
export const NewTask = styled(Link)`
  grid-area: newtask;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2rem;

  > svg {
    margin-right: 0.8rem;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newtask content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      'header'
      'search'
      'content'
      'newtask';

    ${Brand} {
      display: none;
    }

    ${Content} {
      padding: 0 1.6rem;
      margin-top: 2rem;
      overflow-y: scroll;
    }

    ${NewTask} {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: auto;
      padding: 0.7rem;
      border-radius: 50%;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      width: 8rem;
      height: 8rem;
      font-size: 1.1rem;

      > svg {
        margin: 0;
      }

      > span {
        display: none;
      }
    }
  }
`
