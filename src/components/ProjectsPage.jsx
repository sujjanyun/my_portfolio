import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import yuansfer from '../assets/yuansfer_cover.png'
import puppyluv from '../assets/puppyluv_cover.png'
import { Box, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        position: 'relative',
        fontFamily: "Urbanist",
        fontSize: '20px',
        textAlign: "center",
        flexGrow: 1,
        paddingBottom: '60px',
        paddingTop: '20px',
        backgroundColor: '#FCF6F1',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#1C2A4E',
        minHeight: '90vh'
    },
    box: {
        width: '84%',
        textAlign: 'center',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

}));

export default function Projects() {
    const classes = useStyles();

    const renderMobileMenu = (
        <div className={classes.sectionMobile}>
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid className={classes.work} container spacing={6}>
            <Grid item auto>
                <Card border="primary" className={classes.image}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width='150'
                            image={yuansfer}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/yuansfer';
                            }}
                            title="Yuansfer"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item auto>
                <Card border="primary" className={classes.image}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width='150'
                            image={puppyluv}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/puppyluv';
                            }}
                            title="PuppyLuv"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid>
        </Box>
        </div>
    );

    return (
        <div className={classes.root} id="more-info">
            <h1>My Recent Work</h1>
        <div className={classes.sectionDesktop}>
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid className={classes.work} container spacing={6}>
            <Grid item xs={6}>
                <Card border="primary" className={classes.image}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width='150'
                            image={yuansfer}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/yuansfer';
                            }}
                            title="Yuansfer"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card border="primary" className={classes.image}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width='150'
                            image={puppyluv}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/puppyluv';
                            }}
                            title="PuppyLuv"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid>
        </Box>
        </div>
        {renderMobileMenu}
        </div>
    );
}