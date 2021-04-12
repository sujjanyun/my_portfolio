import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, Link, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "Kiwi Maru",
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
        '& > * + *': {
            marginLeft: theme.spacing(1),
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleChange = (e) => {
        setAuth(e.target.checked);
    };

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
                            }}>{'Projects'}
                        </Link>
                        <Link href="/contact" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/contact';
                            }}>{'Contact'}
                        </Link>
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Switch checked={auth} onChange={handleChange} name="light switch"/>}
                        label={auth ? 'Lights On' : 'Lights Out'}
                        />
                    </FormGroup>
                </Toolbar>
            </AppBar>
        </div>
    );
}