import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navItems: {

  }
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Redding Construction
          </Typography>
          <div className={classes.navItems}>
            <Button color="inherit">Landscaping</Button>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;