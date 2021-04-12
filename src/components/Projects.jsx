import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { CardMedia } from '@material-ui/core';
import myImage2 from '../assets/image02.jpg'
import myImage3 from '../assets/image03.jpg'
import myImage4 from '../assets/image04.jpg'
import CardActionArea from '@material-ui/core/CardActionArea';
import { IconButton, Tooltip } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Kiwi Maru",
        textAlign: "center",
        paddingLeft: "10vh",
        paddingRight: "10vh",
        flexGrow: 1,
        paddingBottom: '50px',
    },
    img: {
        maxWidth: '500px',
        maxHeight: '500px',
        minWidth: '100px',
        minHeight: '100px',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: '10px #556B2F solid',
    },
    pokemon: {
        paddingBottom: '10px',
        paddingTop: '10px',
        backgroundColor: 'rgba(247, 202, 24, .5)',
    },
    vibemersion: {
        paddingBottom: '10px',
        paddingTop: '10px',
        backgroundColor: 'rgba(247, 202, 24, .5)',
    },
    vibemersiontext: {
        fontFamily: "Kiwi Maru",
        fontSize: '16px',
    },
    pokemontext: {
        fontFamily: "Kiwi Maru",
        fontSize: '16px',
    },
}));

export default function Projects() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root}>
            <h1>Check Out My Work!</h1>
            <Grid container spacing={3}>
            <Grid item xs>
            <Paper className={classes.vibemersion} elevation={3}>
                <h2>Vibe-mersion</h2>
                <CardActionArea>
                <Tooltip title="Vibe-mersion">
                <CardMedia className={classes.media}>
                    <img src={ myImage3 } className={classes.img} alt='this is me!' onClick={(e) => {e.preventDefault();
                    window.location.href = 'https://affectionate-euclid-e78016.netlify.app'}}/>
                    <img src={ myImage4 } className={classes.img} alt='this is me!' onClick={(e) => {e.preventDefault();
                    window.location.href = 'https://affectionate-euclid-e78016.netlify.app'}}/>
                </CardMedia>
                </Tooltip>
                <CardContent className={classes.vibemersiontext}>
                <Link href="https://affectionate-euclid-e78016.netlify.app">Vibe-mersion</Link>
                <p>With COVID wrecking everyone's travel plans and isolating everyone at home, we wanted to create an app that could help despondent and wander-lusting people feel and perhaps plan for their next trip when all this is over. Thus Vibe-mersion was born! Vibe-mersion is a front-end project using the technologies Node.js, CSS, and HTML.</p>
                <p>Challenges: Pulling APIs have been a bit difficult with this project since APIs all vary in their ease of usability and documentation. We were able to use a music API, however were a bit disappointed we could only pull music from American music charts, not world charts.</p>
                </CardContent>
                </CardActionArea>
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.pokemon} elevation={3}>
                <h2>Pokemon List</h2>
                <CardActionArea>
                <Tooltip title="Pokemon I Choose You!">
                <CardMedia className={classes.media}>
                    <img src={ myImage2 } className={classes.img} alt='this is me!' onClick={(e) => {e.preventDefault();
                    window.location.href = 'https://quizzical-wing-68607c.netlify.app'}}/>
                </CardMedia>
                </Tooltip>
                <CardContent className={classes.pokemontext}>
                <Link href="https://quizzical-wing-68607c.netlify.app">Pokemon</Link>
                <p>Pokemon list was a 3 hour React project using the Pokemon API.</p>
                <p>Challenges: It took me a while to figure out how to map through the second array to get more details from the array.</p>
                </CardContent>
                </CardActionArea>
            </Paper>
            </Grid>
            </Grid>
        </div>
    );
}
