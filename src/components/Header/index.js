import React, { Component } from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";

const style ={
  marginBottom: "16px"
};
function Header() {
    return (
        <div>
            <AppBar position="static" color="primary" style={style}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Mahsus Task
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header