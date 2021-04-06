import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: 'none',
        fontFamily: "Kiwi Maru",
        fontColor: '#585459',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/';
                            }}>Home 
                        </Link>
                        <Link href="/projects" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/projects';
                            }}> Projects
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}