import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  appBar:{
    background: 'black', 
    border: "solid #FF0000 1px",
    position: "fixed"
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <Typography style={{marginLeft: '42%'}} variant="h6" color="inherit">
            KRXNX WRLD
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
