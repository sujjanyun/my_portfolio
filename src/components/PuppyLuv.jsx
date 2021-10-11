import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import YoutubeEmbed from "./YoutubeEmbed";

import Grid from '@material-ui/core/Grid';
import title from '../assets/puppyluv_title.png'
import process from '../assets/puppyluv_lucid.png'
import registration from '../assets/puppyluv_registration.png'
import selection from '../assets/puppyluv_selection.png'
import parks from '../assets/puppyluv_parks.png'
import gif from '../assets/puppyluv_gif.gif'

import useWindowPosition from "../hook/useWindowPosition";
import Fade from '@mui/material/Fade';
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        minHeight: '120vh',
        fontFamily: "Kaisei Tokumin",
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'width',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#1C2A4E',
    },
    container: {
        textAlign: 'center',
        paddingTop: '80px',
        backgroundColor: '#FFDAE0',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    info: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'center',
        backgroundColor: '#FFF3F5',
        maxWidth: '800px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
    },
    background: {
        backgroundColor: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        overflow: 'hidden',
        paddingBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    backgroundTextHeader: {
        fontFamily: "Kaisei Tokumin",
    },
    backgroundText: {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Urbanist',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    problem: {
        backgroundColor: '#FFDAE0',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        overflow: 'hidden',
        paddingBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    problemText: {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Urbanist',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    process: {
        backgroundColor: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        overflow: 'hidden',
        paddingBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    processText: {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Urbanist',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    design: {
        backgroundColor: '#FFDAE0',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        overflow: 'hidden',
        paddingBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    designText: {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Urbanist',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    impact: {
        backgroundColor: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left',
        overflow: 'hidden',
        paddingBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    impactText: {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Urbanist',
        fontSize: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    before_image: {
        display: 'flex',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '1000px',
        height: '100%',
        alignItem: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '20px',
    },
    video: {
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));


export default function PuppyLuv() {
    const classes = useStyles();
    const bgcheck = useWindowPosition("bg");
    const probcheck = useWindowPosition("prob");
    const proccheck = useWindowPosition("proc");
    const devcheck = useWindowPosition("dev");
    const impcheck = useWindowPosition("imp");

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.heading}>
                <img src={ title } alt='before' className={classes.before_image}/>
                <Grid container spacing={2} className={classes.info}>
                    <Grid item xs>
                        <h3>Project</h3>
                        <p>Digital Crafts Capstone Project</p>
                    </Grid>
                    <Grid item xs>
                        <h3>Duration</h3>
                        <p>March 2021 - April 2021</p>
                    </Grid>
                    <Grid item xs>
                        <h3>Role</h3>
                        <p>Full-Stack Development, User Experience Design</p>
                    </Grid>
                    <Grid item xs>
                        <h3>Tools</h3>
                        <p>React, HTML, CSS, Node.js</p>
                    </Grid>
                </Grid>
                </div>
            </div>
                <Scroll to="bg-info" smooth={true}>
                <div className={classes.background} id="bg-info">
                <Fade in={bgcheck} {...(bgcheck ? { timeout: 1500 } : {})}>
                    <div className={classes.backgroundText} id="bg">
                    <h1 className={classes.backgroundTextHeader}>Background</h1>
                    <p>The online dating industry is a multi-billion dollar business. This number indicates that there are a plethora of lost and lonely souls wanting to connect with someone in cyberspace. After all, we all just want to love and be loved. Though there are already popular apps out there ready to connect single people, we saw and targeted a need to connect the furrier friends of our world - puppies!</p>
                    <p>PuppyLuv is a one of a kind, mobile-responsive, built from the ground up  paw-fect app designed to bring the only pure souls in this cruel world, together. It was designed with the singular vision of connecting users who love puppies with other users who love puppies, in both their joys and their sorrows.</p>
                    </div>
                </Fade>
                </div>
                </Scroll>
                <Scroll to="prob-info" smooth={true}>
                <div className={classes.problem} id="prob-info">
                    <Fade in={probcheck} {...(probcheck ? { timeout: 1500 } : {})}>
                    <div className={classes.problemText} id="prob">
                    <h1 className={classes.backgroundTextHeader}>Problem</h1>
                    <p>In this world we are more connected via smart phones and social media than ever before, yet studies have shown time and time again, <a href="https://www.cnbc.com/2020/01/23/loneliness-is-rising-younger-workers-and-social-media-users-feel-it-most.html">we are more disconnected and isolated than ever.</a> We hoped to address this growing problem by connecting real users to each other, in real life and providing them a safe and secure space and community for users to interact with each other online, and more importantly, offline. Love, is a four-legged word.</p>
                    <p>As the team's developer and UI/UX designer, I had the opportunity to create this React app using Material UI, Auth0, Node.js, ElephantSQL, and Firebase.</p>
                    </div>
                    </Fade>
                </div>
                </Scroll>
                <Scroll to="proc-info" smooth={true}>
                <div className={classes.process} id="proc-info">
                    <Fade in={proccheck} {...(proccheck ? { timeout: 1500 } : {})}>
                    <div className={classes.processText} id="proc">
                    <h1 className={classes.backgroundTextHeader}>Process</h1>
                    <p>Using the website Lucid, we created a wire-frame to best brainstorm, illustrate, and understand the app's user flow.</p>
                    <img src={ process } alt='before' className={classes.before_image}/>
                    </div>
                    </Fade>
                </div>
                </Scroll>
                <Scroll to="dev-info" smooth={true}>
                <div className={classes.design} id="dev-info">
                <Fade in={devcheck} {...(devcheck ? { timeout: 1500 } : {})}>
                    <div className={classes.designText} id="dev">
                    <h1 className={classes.backgroundTextHeader}>Design & Development</h1>
                    <h3>Attractive Landing Page</h3>
                    <p>The home page is a relic of the past and an eye-catching landing page is crucial for today's market. Using inspiration from current dating websites, we decided to use a pink and white color palette as it symbolizes an innocent and youthful form of love - a puppy love. Branding is everything, and from the get-go, we wanted our users to know who we are, what we are all about, and how it all works.</p>
                    <p>We used Material UI and React.js to create our mobile-responsive landing page.</p>
                    <img src={ gif } alt='before' className={classes.before_image}/>
                    <h3>Registration Page</h3>
                    <p>To register and use the app's services, users are taken to a registration page on the website or their mobile devices. In the backend, we used auth0 for authentication and firebase to store the user's data in a secure and safe database.</p>
                    <img src={ registration } alt='before' className={classes.before_image}/>
                    <h3>User Filtering Component</h3>
                    <p>Users are then taken to a page where the user can filter out other users based on several criteria such as age, area, number of pets, gender, etc. in order to find their paw-fect pair. Similarly to social media profiles, the user can look at other user's profiles.</p>
                    <img src={ selection } alt='before' className={classes.before_image}/>
                    <h3>Meet and Mingle </h3>
                    <p>Once matched with a partner, users can exchange contact information and meet at a park nearby. Using the google API key, we allow users to map through different parks based on location or zip code. Puppies can play today!</p>
                    <img src={ parks } alt='before' className={classes.before_image}/>
                    <h3>App Walk-Through</h3>
                    <div className={classes.video}>
                        <YoutubeEmbed embedId="P0yHswtatDc" />
                    </div>
                    </div>
                </Fade>
                </div>
                </Scroll>
                <Scroll to="imp-info" smooth={true}>
                <div className={classes.impact} id="imp-info">
                <Fade in={impcheck} {...(impcheck ? { timeout: 1500 } : {})}>
                    <div className={classes.impactText} id="imp">
                    <h1 className={classes.backgroundTextHeader}>Impact</h1>
                    <h3>Spotlighted on the Digital Crafts Website</h3>
                    <p>Our project was chosen out of a substantial number of standout projects to be highlighted on the Digital Craft's website. <a href="https://github.com/sujjanyun/puppyluv_frontend">Check out our code.</a></p>
                    </div>
                </Fade>
                </div>
                </Scroll>
            </div>
    );
};