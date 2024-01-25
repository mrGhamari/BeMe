
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    typography : {
        fontFamily : 'vazirFont'
    }
})

const MuiTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // <h3>MuiTheme dd</h3>
  )
}

export default MuiTheme