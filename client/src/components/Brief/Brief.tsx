import React from 'react';
import { Paper } from '@material-ui/core';
import { useSelector } from "react-redux";
import style from './style'
import { shortDate, time, getMetric } from '../City/utils';


const Brief = (props: any) => {
    const classes = style();
    const cityData = useSelector((state: any) => state.city);
    const unitsData = useSelector((state: any) => state.units);
    const { name, sunrise, sunset, coord, country, list } = cityData;

    const min = 60;
    const hour = 60 * min;
    const range3hours = 3 * hour;

    const currentForecast = (array: { dt: number }[]): any => {
        if (array.length === 1) return array[0];
        const arr0 = array.slice(0, ~~(array.length / 2))
        const arr1 = array.slice(~~(array.length / 2))
        return (new Date().getTime() - ((arr1[0].dt - range3hours) * 1000)) > 0 ?
            currentForecast(arr1) : currentForecast(arr0)
    }

    const current = currentForecast(list);
    const { clouds, dt, main, wind, visibility, weather } = current;

    return (
        <Paper className={`${classes.paper} ${classes.brief}`}>
            <p className={classes.briefFlexItem}>{shortDate(dt)}, {time(dt)}</p>
            <h1 className={classes.briefFlexItem}>{[name, country].join(', ')}</h1>
            <div className={classes.flexBase}>
                <img alt={''}
                    src={weather[0]?.icon && `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} />
                <h1 className={classes.briefFlexItem}>{getMetric.temp(main?.temp, unitsData?.name)}</h1>
            </div>
            <h2 className={classes.briefFlexItem}>{weather[0]?.description}</h2>
            <b className={classes.briefFlexItem}>
                <span>{`temperature from ${getMetric.temp(main?.temp_min, unitsData.name)} to ${getMetric.temp(main?.temp_max, unitsData.name)},`}</span>
                <span>{` humidity ${list[0]?.main.humidity}%.`}</span>
                <span>{` wind ${getMetric.speed(current?.wind?.speed, unitsData.name)} at ${wind?.deg}°,`}</span>
                <span>{` clouds ${clouds.all}%, `}</span>
                <span>{` visibility ${getMetric.distance(visibility / 1000, unitsData.name)}.`}</span>
            </b>
            <b className={classes.briefFlexItem}>sunrise:{time(sunrise)}</b>
            <b className={classes.briefFlexItem}>sunset:{time(sunset)}</b>
            <b className={classes.briefFlexItem}>Feels like {getMetric.temp(main?.feels_like, unitsData?.name)}.</b>
            <span className={classes.briefFlexItem}>Geo coords [{coord?.lon} , {coord?.lat}]</span>
        </Paper>
    )
}
export default Brief;
