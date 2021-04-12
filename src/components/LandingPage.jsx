import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from '@material-ui/core';
import myImage from '../assets/image01.jpg'
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
        paddingBottom: '50px',
    },
    media: {
        textAlign: "center",
    },
    img: {
        minWidth: '10px',
        maxHeight: '400px',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: '10px #556B2F solid',
    },
    about: {
        backgroundColor: 'rgba(247, 202, 24, .5)',
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '30px',
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Adventure is Out There!</h1>
                <CardMedia className={classes.media}>
                    <img src={ myImage } className={classes.img} alt='this is me!'/>
                </CardMedia>
            <div className={classes.about}>
            <p>Hello && 안녕하세요!</p>
            <p>My name is Susan Yun and I am an aspiring Full-Stack Software Developer.</p>
            <p>Before taking the plunge into the wonderful world of the world wide web, I graduated from the University of Texas at Austin with a Bachelor of Science degree in Nutrition and Public Health. I know, I know. What does a social-science degree in the realm of health have to do with coding? Well my friend, as the web is connected, so is the world, and innovation happens at the intersections!</p>
            <p>I am an endless explorer and curious curator. I desire to bring a different perspective, utilizing my unique background, to build user-friendly applications and eye-catching, beautiful designs, to people, for people. I also love stories and love to tell stories. Our individual stories connects us all to our shared humanity. Through my code, I hope to share my story. Let me help you, share your story and bring your webpage to life.</p>
            <p>In my free time, I love to read, dream, find memes, come up with revolutionary schemes, and write boolean strings!</p>
            </div>
            <h2>Contact Me!</h2>
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