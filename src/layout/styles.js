import styled from 'styled-components'

// src/layouts/styles.js

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    'brand header'
    'aside content'
    'aside content'
    'aside content';
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto;
    grid-template-areas:
      'header'
      'content';
  }
`

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

  @media (max-width: 768px) {
    display: none;
  }
`

export const Header = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: 3rem;
    padding: 0 1rem;
  }
`

export const Aside = styled.aside`
  grid-area: aside;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-top: 2.4rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  box-sizing: border-box;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: calc(100vh - 3rem);
    padding: 0 16px;
    align-items: flex-start;
    padding-top: 5rem;
    overflow: hidden;
  }
`
