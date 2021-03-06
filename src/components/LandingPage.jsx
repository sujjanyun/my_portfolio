import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Grid, IconButton, Tooltip } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Typical from 'react-typical'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#FCF6F1',
        backgroundSize: 'cover',
    },
    about: {
        display: 'block',
        color: '#1C2A4E',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '60px',
        width: '70%',
        maxWidth: '600vh',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
        },
    },
    annyeong: {
        fontFamily: "Kaisei Tokumin",
        fontWeight: '400',
        display: 'block',
        fontSize: '75px',
        color: '#1C2A4E',
        [theme.breakpoints.down('sm')]: {
            fontSize: '65px',
        },
    },
    contact: {
        justifyContent: "center",
        alignItems: "center",
    },
    aboutMe: {
        fontFamily: 'Urbanist',
        display: 'block',
        position: 'relative',
        fontWeight: '300',
        fontSize: '22px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '20px',
        },
    },
    arrow: {
        textAlign: 'center',
    },
    goDown: {
        color: "#1C2A4E",
        fontSize: "4rem",
        textAlign: 'center'
    },
}));

export default function LandingPage() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
        <Grid container spacing={1} className={classes.about}>
            <Grid item xs>
            <Collapse
            in={checked}
            {...(checked ? { timeout: 5000 } : {})}
            collapsedHeight={3}
            >
            <h1 className={classes.annyeong}>Annyeong!<br></br>I'm Susan Yun.</h1>
            <h3 className={classes.aboutMe}>I'm a product designer fascinated by the nature of all things, both human and otherworldly. This excitement and genuine curiosity to understand EVERYTHING motivates me to explore, learn, and create new and thoughtful things every day.
            <h3 className={classes.aboutMe}>I love {' '}
            <Typical
                steps={['books, books about books, and book-shelves ????', 1000,
                        'making meaningful contributions ????', 1000,
                        '~feelings~ ????', 1000,
                        'playing with ideas ????', 1000,
                        'deep introspection ????', 1000,
                        'understanding desires and motivations ????', 1000,
                        'love, a love of LOVE, and learning about love ????', 1000,
                        'world-wide wandering ????', 1000,
                        'beauty, in all its strange and wonderful forms ????', 1000,
                        ]}
                loop={Infinity}
                wrapper="b"
            />
            </h3>
            </h3>
            <div className={classes.contact}>
            <Tooltip title="E-Mail">
                <IconButton button key="Email" component="a" href="mailto:susanhkyun@gmail.com">
                    <EmailIcon style={{ color: grey[900] }}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Resume">
                <IconButton button key="Download" component="a" href="../assets/UXDesignerResume.pdf" download="UXDesignerResume">
                    <PictureAsPdfIcon style={{ color: grey[900] }}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
                <IconButton>
                    <GitHubIcon style={{ color: grey[900] }} onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://github.com/sujjanyun';
                }}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <IconButton>
                    <LinkedInIcon style={{ color: grey[900] }} onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://www.linkedin.com/in/susan-yun96/';
                }}/>
                </IconButton>
            </Tooltip>
            </div>
            <div className={classes.arrow}>
            <Scroll to="more-info" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
            </Scroll>
            </div>
            </Collapse>
            </Grid>
        </Grid>
        </div>
    );
}