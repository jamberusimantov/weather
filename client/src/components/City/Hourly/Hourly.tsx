import React from "react";
import { useSelector } from "react-redux";
import { Paper, Grid } from '@material-ui/core'
import useStyle from '../style';
import { time, getMetric } from "../utils";


const Hourly = (props: any) => {
    const classes = useStyle();
    const cityData = useSelector((state: any) => state.city);
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    const five_days = cityData.list;


    return (<>
        <Paper className={classes.paper}>
            <h2>Hourly</h2>
            {five_days && React.Children.toArray(
                five_days.filter((forecast: any, index: number) => index < 5).map((forecast: any, i: number) => {
                    const { main: { temp, humidity, feels_like }, weather } = forecast;
                    const { icon, description } = weather[0];
                    return (
                        <Grid container className={classes.listTr}
                            alignItems='center'
                            justifyContent='space-between'
                            spacing={1}>


                            {<Grid item className={classes.listTd}>
                                {time(forecast?.dt)}
                            </Grid>}

                            <Grid item className={classes.listTd}>
                                {getMetric.temp(temp, unitsData.name)}
                            </Grid>


                            {windowWidth > 500 && (<Grid item className={classes.listTd}>
                                {`${humidity}%`}
                            </Grid>)}

                            {windowWidth > 600 && (<Grid item className={classes.listTd}>
                                {getMetric.temp(feels_like, unitsData.name)}
                            </Grid>)}

                            <Grid item className={classes.listTd}>
                                <img alt={''}
                                    className={classes.icon}
                                    src={icon && `https://openweathermap.org/img/wn/${icon}@2x.png`} />
                            </Grid>

                            {windowWidth > 500 && (<Grid item className={classes.listTd}>
                                {`${(description)}`}
                            </Grid>)}

                        </Grid>
                    )
                }))}
        </Paper>
    </>)
}

export default Hourly;
