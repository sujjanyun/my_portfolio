import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import signIn from '../assets/yuansfer-signin.png'
import Grid from '@material-ui/core/Grid';
import title from '../assets/yuansfer_title.png'
import before from '../assets/before-mobile.png'
import process from '../assets/payee_process.png'
import payee from '../assets/payee_mobile.png'
import tip from '../assets/tip_message.png'
import dashboard from '../assets/dashboard.png'
import desktop from '../assets/payout_desktop.png'

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
        backgroundColor: '#e7eff6',
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
        backgroundColor: '#f2f9ff',
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
        backgroundColor: '#e7eff6',
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
        backgroundColor: '#e7eff6',
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
    }
}));

export default function Yuansfer() {
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
                    <p>Yuansfer Desktop and Mobile App Re-Design</p>
                </Grid>
                <Grid item xs>
                    <h3>Duration</h3>
                    <p>May 2021 - Ongoing</p>
                </Grid>
                <Grid item xs>
                    <h3>Role</h3>
                    <p>User Experience Design, Wireframing, Interface Design, Interactive UI</p>
                </Grid>
                <Grid item xs>
                    <h3>Tools</h3>
                    <p>Figma, Adobe Illustrator</p>
                </Grid>
                </Grid>
                </div>
            </div>
            <Scroll to="bg-info" smooth={true}>
            <div className={classes.background} id="bg-info">
            <Fade in={bgcheck} {...(bgcheck ? { timeout: 1500 } : {})}>
                <div className={classes.backgroundText} id="bg">
                <h1 className={classes.backgroundTextHeader}>Background</h1>
                <p>Founded in 2017, Yuansfer is a leading alternative payment platform that helps businesses reach consumers around the world. Thousands of American businesses are already using Yuansfer to accept and make payments.</p>
                <p>China, one of Yuansfer's primary consumers, has stringent policies on foreign exchange and electronic payments. This makes it often difficult and expensive for small-time Chinese exporters to set foot into the global market. As an American based company, <b>Yuansfer makes it easy to bridge the gap between borders</b>, connecting both countries and people into an ever-growing globalized and cooperative economy. <a href="https://www.yuansfer.com/home">Learn more about what Yuansfer does.</a></p>
                </div>
            </Fade>
            </div>
            </Scroll>
            <Scroll to="prob-info" smooth={true}>
            <div className={classes.problem} id="prob-info">
                <Fade in={probcheck} {...(probcheck ? { timeout: 1500 } : {})}>
                <div className={classes.problemText} id="prob">
                <h1 className={classes.backgroundTextHeader}>Problem</h1>
                <p>As an UI/UX intern, I had the opportunity <b>to create high-fidelity wireframes, clickable prototypes, and user flows for both the website and the mobile app </b>in order to increase tip revenue and decrease misdirected payments. Handling finances is a risky and serious business, so I sought to build an easily navigable and secure experience for users to feel confident that their money is safe.</p>
                <p>From previous critiques, I understood that the payee user flow was not very intuitve nor easy to use. The methods in which to send payouts were cluttered and the account information small and hard to read. Additionally, Yuansfer did not have a payout component built into their mobile app. As Yuansfer continues to expand, these changes were not only necessary, but imperative to the success and marketability of the company.</p>
                <h3>Before Mobile User Interface</h3>
                <img src={ before } alt='before' className={classes.before_image}/>
                </div>
                </Fade>
            </div>
            </Scroll>
            <Scroll to="proc-info" smooth={true}>
            <div className={classes.process} id="proc-info">
                <Fade in={proccheck} {...(proccheck ? { timeout: 1500 } : {})}>
                <div className={classes.processText} id="proc">
                <h1 className={classes.backgroundTextHeader}>Process</h1>
                <p>The payment flow at Yuansfer involves a two party payor/payee system. With the help of the senior product designer, I created a user flow mockup to better understand the user's interaction with the app. </p>
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
                <h3>Adding a Payee Component on the Mobile App</h3>
                <p>Utilizing the features and flow of the payee component from the website, I designed an attractive and easy to navigate mobile version. Inspired by familiar features on well-known finance and social media applications, I created individual profiles for different payees as well as scrollable cards that mimic the look and feel of real credit cards. This organizes the flow of the payee component into an inverse pyramid with a decreasing number of easy steps that concludes with the final action step. These changes may seem small, but are crucial in making the user cognizant of how and where they are sending their money.</p>
                <p>Users are now able to make payouts on their mobile devices. This streamlines the payment process and gives users a quick way to access their accounts.</p>
                <img src={ payee } alt='before' className={classes.before_image}/>
                <h3>Implementing Tip Feedback.</h3>
                <p>In order to make tip payments between different merchants, the user had to go through a complicated and mundane series of steps often resulting in little to no reward. I re-designed the tip component and added real-time feedback to inspire a user's judgement and empathy. By understanding that real people are behind real numbers, users are more likely to give a little extra out of the often underestimated generosity of their heart.</p>
                <p>Making tips is no longer about a required percentage out of social obligation, but an engaging process that brings power to real people and genuine goodwill for others.</p>
                <img src={ tip } alt='before' className={classes.before_image}/>
                <h3>Re-Designing Payout Component on Website</h3>
                <p>The payout component on the website was cluttered and hard to navigate. Studies indicated that users accidentally sent money to the wrong payees. This complicated our customer service team and added unnecessary additional work to correct a relatively simple mistake.</p>
                <p>I decided to add additional steps, much like the mobile version, in order to make the user aware of their actions. I created a simple and clean modal with several additional options that would appear when clicking the payout button.</p>
                <img src={ desktop } alt='before' className={classes.before_image}/>
                <h3>Cleaner and Simpler User Interface</h3>
                <p>We all know the world runs on branding. The difference between a good company and a great company is a combination of inclusivity, intuition, and design. Mediocre designs and colorless interfaces are no longer acceptable in an increasingly competitive and impressively skilled global market. Though the industry of finance has long been known for tradition and white-collared workers, in today's world, even the best of banks have got to keep up with the times.</p>
                <p>Inspired by a variety of modern and clean interfaces, I designed a more attractive, sleek, yet equally friendly and personable dashboard. The welcome message is important for users to feel a personal connection with our company. I employed a heavy use of color gradients, rounded designs, and an optional dark mode to give the app a sleek and futuristic feel, but also graphs, numbers, and a background of the world map, in order to not lose touch with reality.</p>
                <p>Money has always been seen as a great evil in this world, but I believe with the right designs and good cents (hehe), we can see it for what it really is, a powerful and personal tool to achieve agency, autonomy, and freedom.</p>
                <img src={ dashboard } alt='before' className={classes.before_image}/>
                <img src={ signIn } alt='before' className={classes.before_image}/>
                </div>
            </Fade>
            </div>
            </Scroll>
            <Scroll to="imp-info" smooth={true}>
            <div className={classes.impact} id="imp-info">
            <Fade in={impcheck} {...(impcheck ? { timeout: 1500 } : {})}>
                <div className={classes.impactText} id="imp">
                <h1 className={classes.backgroundTextHeader}>Impact</h1>
                <h3>10% Decrease Misdirected Payments</h3>
                <p>Since the implementation of the new rebuild of the Yuansfer payout component, we have seen a significant decrease in the number of mistaken payment transactions. This has saved Yuansfer both time and money and has allowed for the company to direct its energy into continuously expanding and improving its services. We have also reported an increase in both employee and customer satisfaction. Both on the user and company perspective, we no longer need to deal with these time-consuming and frustrating mistakes.</p>
                <h3>6% Increase in Tip Revenue</h3>
                <p>According to our surveys, the addition of real-time feedback has proven to be a hit amongst users. We have not only seen an increase in tips, but we have reported an increase in customer satisfaction. Users reported that they feel more connected with the business, therefore more convicted to give.</p>
                </div>
            </Fade>
            </div>
            </Scroll>
        </div>
    );
};