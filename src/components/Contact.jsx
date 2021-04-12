import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { IconButton, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh",
        fontFamily: "Kiwi Maru",
        textAlign: "center",
        paddingLeft: '50px',
        paddingRight: '50px',
    },
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Contact Me!</h1>
            <h4>Please...</h4>
            <Tooltip title="E-Mail">
                <IconButton color="primary" button key="Email" component="a" href="mailto:susanhkyun@gmail.com">
                    <EmailIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Resume">
                <IconButton color="primary" button key="Download" component="a" href="../assets/ATVProgrammerResume.pdf" download = "ATVProgrammerResume.pdf">
                    <PictureAsPdfIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
                <IconButton color="primary">
                    <GitHubIcon onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://github.com/sujjanyun';
                }}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <IconButton color="primary">
                    <LinkedInIcon onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://www.linkedin.com/in/susan-yun96/';
                }}/>
                </IconButton>
            </Tooltip>
        </div>
    );
};