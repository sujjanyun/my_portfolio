import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Box, Grid } from '@material-ui/core';
import aboutMe from '../assets/aboutme.png';
import illustrator from '../assets/adobe_illustrator.png';
import photoshop from '../assets/adobe_photoshop.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';

import useWindowPosition from "../hook/useWindowPosition";
import Fade from '@mui/material/Fade';
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh",
        fontFamily: "Urbanist"
    },
    heading: {
        fontFamily: "Urbanist",
    },
    colorText: {
        fontFamily: "Kaisei Tokumin",
        color: '#1C2A4E',
    },
    intro: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '50px',
        textAlign: 'center',
        color: '#1C2A4E',
        backgroundColor: '#FCF6F1',
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
        },
    },
    img: {
        display: 'flex',
        width: '100%',
        maxWidth: '1000px',
        height: '100%',
        maxHeight: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    about: {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '50px',
        paddingRight: '50px',
        color: '#1C2A4E',
        maxWidth: '1000px',
        paddingBottom: '30px',
        paddingTop: '30px',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
        },
    },
    values: {
        color: '#1C2A4E',
        backgroundColor: 'white',
        overflow: 'hidden',
        fontSize: "16px",
    },
    valuetext: {
        maxWidth: '1000px',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '20px',
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
        },
    },
    connect: {
        color: '#1C2A4E',
        overflow: 'hidden',
        textAlign: 'center',
    },
    skills: {
        color: '#1C2A4E',
        overflow: 'hidden',
        backgroundColor: '#FCF6F1',
        fontSize: "16px",
    },
    skillstext: {
        maxWidth: '1000px',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
        },
    },
    skillsbox: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icons: {
        display: 'flex',
        width: '100%',
        maxWidth: '100px',
        minWidth: '100px',
        height: '100%',
        maxHeight: '100px',
        minHeight: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '55px',
            minWidth: '55px',
            maxHeight: '55px',
            minHeight: '55px',
        },
    }
}));

export default function About() {
    const classes = useStyles();
    const biocheck = useWindowPosition("bio");
    const skillscheck = useWindowPosition("skills");


    return (
        <div className={classes.root}>
            <div className={classes.intro}>
            <h1 className={classes.title}>
                <span className={classes.heading}>A little bit about</span><span className={classes.colorText}> Myself.</span>
            </h1>
            <CardMedia className={classes.media}>
                <img src={ aboutMe } className={classes.img} alt='oops i am a lil shy'/>
            </CardMedia>
            <div className={classes.about}>
                <p>Hi! My name is Susan Yun and I am a <b>self-taught UI/UX designer</b> with experience in software development. Before taking the plunge into the wonderful world of the world wide web, I graduated from the University of Texas at Austin with a Bachelor of Science degree in Nutrition and Public Health.</p>
                <p>As the web is connected, so is the world, and I believe, innovation happens at the intersections! My initiative and drive to venture into a brand new exciting field has taught me that life is about the journey and similarly, design is about the process. I am constantly challenging myself to ideate, innovate, and iterate new lessons to become a better designer everyday!</p>
                <p>I am an endless explorer and curious curator. I desire to bring different perspectives together to build inclusive, user-friendly applications and eye-catching, beautiful designs, to people, for people. I love stories, love to hear stories, and love to tell stories. I believe we were created to share our individual stories and to watch them connect us in our shared humanity.</p>
                <p>In my free time, I love to read, dream, find memes, come up with revolutionary schemes, and write boolean strings!</p>
            </div>
            </div>
            <Scroll to="bio-info" smooth={true}>
            <div className={classes.values} id="bio-info">
            <Fade in={biocheck} {...(biocheck ? { timeout: 1500 } : {})}>
                <div className={classes.valuetext} id="bio">
                <h1>My Values.</h1>
                <h3>The unexamined life is not worth living. 🔎</h3>
                <p>Life is far greater than we realize and far stranger than we can ever fathom. I believe it is important to always ask, 'What the heck is going on?', in order to deepen and enrichen our experience with life. I've always been driven by this internal motivation to explore it all, as much as I can, and am constantly humbled by the knowledge that I will really never know it all... But a girl sure can try!</p>
                <h3>Think globally, act locally. 🌎</h3>
                <p>Learning this principle from my study abroad program in South Africa, I cherish the idea of becoming a global citizen with perspectives gathered from all over the world. As a Korean-American with roots firmly planted on both sides of the globe, I believe the best solutions are reached when we consider the multiple facets and outcomes of a problem, especially in today's ever-increasing interconnected global business sphere.</p>
                <h3>Have courage and be kind. 💖</h3>
                <p>I believe I learn best when I do the things that scare me the most. I believe true bravery isn't about not being scared, but doing what needs to done, despite being terrified out of your pants. I also believe people are a lot more than what we initially assume of them. And when I realize that, the world isn't as big and scary as I think.</p>
                <h3>Talk less, listen more. 📚</h3>
                <p>We live in a very noisy society. Most of us grew up knowing how to hear, but not how to listen. I have learned though-out the years, the importance of listening, earnestness, and not being so quick to place judgement. And this is exactly why I love this industry. In UI/UX people are power and user-centered design is the best kind of design.</p>
                </div>
            </Fade>
            </div>
            </Scroll>
            <Scroll to="skills-info" smooth={true}>
            <div className={classes.skills} id="skills-info">
            <Fade in={skillscheck} {...(skillscheck ? { timeout: 2500 } : {})}>
                <div className={classes.skillstext}>
                <h1 id="skills">My Skills.</h1>
                <h3>Technologies previously worked with...</h3>
                <Box className={classes.skillsbox}>
                <Grid container spacing={3}>
                <Grid item xs>
                    <img src={ html } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ css } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ react } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ javascript } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ figma } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ bootstrap } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ github } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ python } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ illustrator } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                <Grid item xs>
                    <img src={ photoshop } className={classes.icons} alt='oops i am a lil shy'/>
                </Grid>
                </Grid>
                </Box>
                </div>
            </Fade>
            </div>
            </Scroll>
        </div>
    );
};