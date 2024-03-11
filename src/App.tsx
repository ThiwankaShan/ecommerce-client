import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import { Router } from './router'
import { RouterProvider } from 'react-router-dom'

const THEME = createTheme({
  typography: {
    "fontFamily": `"Satoshi", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={THEME}>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  )
}

export default App
