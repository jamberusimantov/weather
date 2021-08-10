import React, { useState, useEffect } from 'react'
import { style } from './style';

export default function Cloud(props?: any) {
    const { data } = props;
    const appDOM: any = document.querySelector('Header');
    const classes = style();
    const cloudSize = data?.size || 60;
    const offsetLeft = appDOM?.offsetLeft || 30;
    const clientWidth = appDOM?.clientWidth || window.innerWidth - 60;
    const limit = clientWidth - offsetLeft - cloudSize;
    const [leftMargin, setLeftMargin] = useState(0);

    useEffect(() => {
        const leftInterval = setInterval(() => {
            setLeftMargin(leftMargin < limit ? leftMargin + offsetLeft : offsetLeft)
        }, 600)
        return () => {
            clearInterval(leftInterval)
        }
    }, [leftMargin, limit, offsetLeft])

    return (
        <img
            src='https://openweathermap.org/img/wn/03n@2x.png'
            alt='logo'
            height={`${cloudSize}`}
            width={`${cloudSize}`}
            style={{ left: `${leftMargin}px` }}
            className={classes.animation} />
    )
}