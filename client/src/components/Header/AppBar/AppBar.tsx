import React from 'react'
import { style } from './style';
import { AppBar, Typography } from '@material-ui/core';
import Cloud from './Cloud';


export default function TopBar(props?: any) {
    const classes = style();
    const clientHeight = 100;

    return (
        <AppBar
            className={`${classes.appBar} appBar`}
            position='relative'
            color='inherit' >

            <Typography
                variant='h3'
                align='center'
                className={classes.heading}>
                Weather
            </Typography>
            <img
                src='http://openweathermap.org/img/wn/03n@2x.png'
                alt='logo'
                height={`${clientHeight}`}
                width={`${clientHeight}`}
                className={classes.image} />

            <Cloud />

        </AppBar>
    )
}