import { GlobalStyle } from './styles/gloabalStyle'
import defaulTheme from './styles/themes/defaultTheme'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/userAuthContext'
import { Routes } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
