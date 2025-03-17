import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: .6rem;
    } 
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.BLUE_200};
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body{
        height: 100vh;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRAY_400};
     }

     body, input, textArea, button{
        font: 400 1.6rem Roboto slab, sans-serif;
     }

     a{
        text-decoration: none;
     }

`
