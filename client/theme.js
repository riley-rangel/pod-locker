import { createMuiTheme } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green,
    accent: green['A400'],
    error: red
  }
})

export default theme
