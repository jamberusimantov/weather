import React from 'react'
import { style } from './style';
import { AppBar, Typography } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import Cloud from './Cloud';

export default function TopBar(props?: any) {
    const classes = style();
    const clientHeight = 100;

    return (
        <AppBar
            className={classes.appBar}
            position='relative'
            color='inherit' >
            <div className={classes.homeBtnContainer}>
                <a href='/' className={classes.homeBtn} >
                    <HomeOutlined />
                </a>
            </div>
            <div className={classes.title}>
                <Typography
                    variant='h3'
                    align='center'
                    className={classes.heading}>
                    Weather
                </Typography>
                <img
                    src="/assets/home.png"
                    alt="logo"
                    className={classes.image}
                    height={`${clientHeight * .6}`}
                    width='auto' />
            </div>
            <Cloud />
        </AppBar>
    )
}