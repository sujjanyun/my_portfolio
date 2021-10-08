import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link, Typography, Menu, IconButton, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Urbanist',
    },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#28282b',
        fontSize: '20px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '120px'
        },
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(5)}
    },
    img: {
        width: '230px',
    },
    media: {
        width: '230px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '120px'
        },
    },
    title: {
        fontSize: "16px",
        fontFamily: 'Urbanist',
        '& > * + *': {
            marginLeft: theme.spacing(2)}
    },
    menu: {
        '& div': {
            width: '350px',
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        paddingRight: '150px',
        paddingTop: '30px',
    },
    sectionMobile: {
        fontFamily: 'Urbanist',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    nav: {
        fontFamily: 'Urbanist',
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
            }}>
                <IconButton color="primary" fontSize="small">
                    <HomeIcon/>
                </IconButton>
                <p className={classes.nav}>Home</p>
            </MenuItem>
            <MenuItem 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/projects';
                }}>
                <IconButton color="primary" fontSize="small">
                    <PlayCircleFilledIcon/>
                </IconButton>
                <p className={classes.nav}>Projects</p>
            </MenuItem>
            <MenuItem 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/about';
                }}>
                <IconButton color="primary" fontSize="small">
                    <PersonIcon/>
                </IconButton>
                <p className={classes.nav}>About</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="fixed" sticky="top" elevation={0}>
                <Toolbar>
                    <pattern className={classes.appbarTitle}>Susan Yun</pattern>
                    <div className={classes.sectionDesktop}>
                    <Typography variant="overline" display="inline" color="black" className={classes.title}>
                        <Link href="/" color="textPrimary" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/';
                            }}>Home
                        </Link>
                        <Link href="/projects" color="textPrimary" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/projects';
                            }}>{'Projects'}
                        </Link>
                        <Link href="/about" color="textPrimary" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/about';
                            }}>{'About'}
                        </Link>
                    </Typography>
                    </div>
                    <div className={classes.sectionMobile} onClick={handleMobileMenuOpen}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                        >
                            <MenuIcon fontSize="medium" color="default"/>
                        </IconButton>
                            </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}