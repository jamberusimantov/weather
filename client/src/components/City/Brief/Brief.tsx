import React from 'react';
import { Paper } from '@material-ui/core';
import { useSelector } from "react-redux";
import style from '../style'
import { shortDate, time, getMetric } from '../utils';


const Brief = (props: any) => {
    const classes = style();
    const cityData = useSelector((state: any) => state.city);
    const unitsData = useSelector((state: any) => state.units);
    const { name, sunrise, sunset, coord, country, list } = cityData;


    return (
        <Paper className={`${classes.paper} ${classes.brief}`}>
            <p>{shortDate(list[0]?.dt)}, {time(list[0]?.dt)}</p>
            <h1>{[name, country].join(', ')}</h1>
            <div className={classes.flexBase}>
                <img alt={''}
                    src={cityData?.list[0]?.weather[0]?.icon && `http://openweathermap.org/img/wn/${cityData?.list[0]?.weather[0]?.icon}@2x.png`} />
                <h1>{getMetric.temp(cityData.list[0]?.main?.temp, unitsData?.name)}</h1>
            </div>
            <h2>{cityData?.list[0]?.weather[0]?.description}</h2>
            <h4>
                <p>
                    <span>{`temperature from ${getMetric.temp(cityData?.list[0]?.main?.temp_min, unitsData.name)} to ${getMetric.temp(cityData?.list[0]?.main?.temp_max, unitsData.name)},`}
                    </span>
                    <span>{` humidity ${cityData?.list[0]?.main.humidity}%.`}</span>
                    <span>{` wind ${getMetric.speed(cityData?.list[0]?.wind?.speed, unitsData.name)} at ${cityData?.list[0]?.wind?.deg}°,`}</span>
                    <span>{` visibility ${getMetric.distance(cityData?.list[0]?.visibility / 1000, unitsData.name)}.`}</span>
                </p>
            </h4>
            <p>sunrise:{time(sunrise)}</p>
            <p>sunset:{time(sunset)}</p>
            <p>Feels like {~~cityData?.list[0]?.main.feels_like}{unitsData.temp}.</p>
            <p>Geo coords [{coord?.lon},{coord?.lat}]</p>
        </Paper>
    )
}
export default Brief;
