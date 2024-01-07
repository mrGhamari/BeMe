import { Button, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const MuiTheme = ({children}) => {
    const theme = createTheme({
        palette: {
          background: {
            paper: '#fff',
            transparent: "transparent",
            current: "currentColor",
            "teal50": "#f0fdfa",
            "teal-100": "#ccfbf1",
            "teal-200": "#a7f3d0",
            "teal-300": "#5eead4",
            "teal-400": "#2dd4bf",
            "teal-500": "#14b8a6",
            "teal-600": "#0d9488",
            "teal-700": "#0f766e",
            "teal-800": "#115e59",
            "teal-900": "#134e4a",
            "teal-950": "#042f2e",
            "dark": "#000",
            "light-gray": "#f5f5f5",
            "white": "#fff",
            "light-blue": "#3A63A8",
            "dark-blue": "#191E29",
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          }
        },
      });
  return (
  <ThemeProvider theme={theme}>
    {children}
   <Button variant='contained' sx={{bgcolor:'background.teal50'}}>click me</Button>
  </ThemeProvider>
  )
}

export default MuiTheme