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
        backgroundColor: 'yellow',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'flex',
        backgroundPosition: 'center',
        backgroundImage: `url('https://media.sanctuarymentalhealth.org/wp-content/uploads/2021/03/04151535/The-Starry-Night.jpg')`,
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
        border: '10px #fff solid',
    },
}));

export default function DarkLandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Adventure is Out There!</h1>
                <CardMedia className={classes.media}>
                    <img src={ myImage } className={classes.img} alt='this is me!'/>
                </CardMedia>
            <p className={classes.about}>Hello && 안녕하세요.</p>
            <p>My name is Susan Yun and I am an aspiring Full-Stack Software Developer.</p>
            <p>Before taking the plunge into the wonderful world of the world wide web, I graduated from the University of Texas at Austin with a Bachelor of Science degree in Nutrition and Public Health. I know, I know. What does a social-science degree in the realm of health have to do with coding? Well my friend, as the web is connected, so is the world and innovation happens at the intersections.</p>
            <p>I am an explorer and curious.  I envision using to bring a different perspective, a human-friendly perspective to build user-friendly applications and eye-catching, unique designs, to people, for people. I love stories. I love to create stories. I love to share stories. The power of stories connect all of us. Let me help you, share your story and bring your webpage to life!</p>
            <p>In my free time, I love to read, write, dream, memes, boolean strings, revolutionary schemes.</p>
            <h2>Contact Me!</h2>
            <Tooltip title="E-Mail">
                <IconButton color="primary" button key="Email" component="a" href="mailto:susanhkyun@gmail.com">
                    <EmailIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Resume">
                <IconButton color="primary">
                    <PictureAsPdfIcon onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://github.com/kgarcia14/puppyluv_frontend';
                }}/>
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