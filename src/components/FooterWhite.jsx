import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";
import { IconButton, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        bottom: '0',
        width: '100vw',
        textAlign: 'center',
        overflow: 'hidden',
    },
    footer: {
        position: 'static',
        display: 'block',
        fontFamily: 'Urbanist',
        fontSize: '12px',
        bottom: '0',
        left: '0',
        width: '100vw',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'grey',
        paddingTop: '12px',
        paddingBottom: '24px',
        overflow: 'hidden',
    },
    contactMe: {
        fontSize: '18px',
    },
}));

export default function Footer() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear()

    return (
        <div className={classes.root}>
            <Typography className={classes.footer}>
            <div className={classes.contact}>
            <div className={classes.contactMe}>Let's Connect!</div>
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
            <div>© {currentYear} Designed & Developed by Susan Yun.</div>
            </div>
            </Typography>
        </div>
    )
}