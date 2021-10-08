import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        minHeight: '120vh',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'width',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: "Noto Sans JP",
    },
    intro: {
        paddingTop: '50px',
    },
    youtube: {
        maxWidth: '1000px',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '50px',
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    bookstagram: {
        maxWidth: '1000px',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '50px',
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

export default function Play() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.intro}>
            <h1>Making the MOST out of LIFE</h1>
            </div>
        <div className={classes.youtube}>
            <h3>Backpacking Across South Korea 2016</h3>
            <YoutubeEmbed embedId="GNy3zSp9c_8" />
        </div>
        <div className={classes.bookstagram}>
            <h3>My Bookstagram</h3>
        </div>
        </div>
    );
};