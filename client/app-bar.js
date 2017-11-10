import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MuiThemeProvider, withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import theme from './theme'

const styles = theme => ({
  root: {
    width: '100%'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  links: {
    textDecoration: 'none',
    color: 'white'
  }
})

function ButtonAppBar(props) {
  const { classes, title } = props
  return (
    <MuiThemeProvider theme={ theme }>
      <div className={ classes.root }>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton
              className={ classes.menuButton }
              color='contrast'
              aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography
              type='title'
              color='inherit'
              className={ classes.flex }>
              <Link to='/' className={ classes.links }>
                { title }
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  )
}

ButtonAppBar.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(ButtonAppBar)
