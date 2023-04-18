import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { Router } from "./Router"
import { UserProvider } from "./contexts/UserContext"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
