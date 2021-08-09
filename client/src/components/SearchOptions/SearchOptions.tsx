import React from 'react'
import { style } from './style';
import { Paper, Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { setUnits } from '../../store/actions/units.actions'


export default function SearchOptions(props: any) {
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    const dispatch = useDispatch();
    const classes = style();

    const setUnit = (unit: any) => {
        dispatch(setUnits({ name: unit }))
    };

    return (<>{windowWidth > 800 &&
        <Paper className={classes.unitToggle}>
            <Button
                className={`${classes.unit} ${unitsData.name === 'Metric' && classes.current}`}
                onClick={() => setUnit('Metric')}>
                {windowWidth > 800 ? 'Metric' : ''} °C, m/s
            </Button>
            <Button
                className={`${classes.unit} ${unitsData.name === 'Imperial' && classes.current}`}
                onClick={() => setUnit('Imperial')}>
                {windowWidth > 800 ? 'Imperial' : ''} °F, mph
            </Button>
        </Paper>
    }</>)
}