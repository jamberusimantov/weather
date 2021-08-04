import React from "react";
import { useSelector } from "react-redux";
import { Paper, Grid } from '@material-ui/core'
import useStyle from '../style';
import { shortDate, timeToString, getMetric } from "../utils";

const FiveDays = (props: any) => {
    const classes = useStyle();
    const cityData = useSelector((state: any) => state.city);
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    const five_days = cityData.list



    return (<>
        <Paper className={`${classes.paperResult} ${classes.paper}`}>
            <h2>Five Days</h2>
            {React.Children.toArray(
                five_days.filter((forecast: any) => {
                    return timeToString(forecast?.dt).substr(16, 2) === '12'
                }

                ).map((forecast: any, i: number) => {
                    const { main: { temp, humidity, feels_like }, weather } = forecast;
                    const { icon, description } = weather[0];
                    return (
                        <Grid container className={classes.listTr}
                            alignItems='center'
                            justifyContent='space-between'
                            spacing={1}>


                            {<Grid item className={classes.listTd}>
                                {shortDate(forecast?.dt)}
                            </Grid>}

                            <Grid item className={classes.listTd}>
                                {getMetric.temp(temp, unitsData.name)}
                            </Grid>

                            {windowWidth > 300 && (<Grid item className={classes.listTd}>
                                {`${humidity}%`}
                            </Grid>)}

                            {windowWidth > 500 && (<Grid item className={classes.listTd}>
                                {getMetric.temp(feels_like, unitsData.name)}
                            </Grid>)}

                            <Grid item className={classes.listTd}>
                                <img alt={''}
                                    className={classes.icon}
                                    src={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`} />
                            </Grid>

                            {windowWidth > 400 && (<Grid item className={classes.listTd}>
                                {`${(description)}`}
                            </Grid>)}

                        </Grid>
                    )
                }))}
        </Paper>
    </>)
}

export default FiveDays;
