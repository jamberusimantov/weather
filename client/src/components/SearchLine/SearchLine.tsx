import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper, IconButton, Grid } from '@material-ui/core'
import { Search} from '@material-ui/icons'
import useStyle from './style';
import { setForm } from '../../store/actions/form.actions'
import { setUnits } from "../../store/actions/units.actions";
import api from '../../api';
import { hasFlag } from 'country-flag-icons';
import addMarkers from "../WeatherMap/Markers";
import { Link } from "react-router-dom";


export default function SearchLine(props: any) {
    const classes = useStyle();
    const formData = useSelector((state: any) => state.query);
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    const { cities, query } = formData
    const dispatch = useDispatch();
    const changeCityQuery = (e: any) => dispatch(setForm({
        ...formData, query: e.target.value
    }))

    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (!formData.query) return console.log('no query');
        const { weather } = api;
        const { getCityObj } = weather;
        const res = await getCityObj({ name: formData.query });
        const { success, data, error } = res
        if (error) return console.log({ error });
        if (!success || !data.data) return console.log({res});
        dispatch(setForm({ ...formData, cities: data.data }))
        if (data.data.length) {
            let centers: number[][] = [];
            data.data.forEach((element: { coord: { lon: number, lat: number } }) => {
                if (!element.coord) return;
                const { lat, lon } = element.coord
                centers.push([lon, lat])
            });

            dispatch(setUnits({
                zoom: 0,
                center: [0, 0],
                features: addMarkers(centers),
                showMarker: true
            }))
        }
    }
    const getFlag = (country: string) => hasFlag(country) ?
        <img alt={`${country}`}
            className={classes.flag}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} />
        : null;


    return (<>
        {/* form */}
        <Paper className={`${classes.paperSearch} ${classes.paper}`}>
            <form
                noValidate
                className={classes.form}
                onSubmit={submitHandler}>

                {/* cityName input */}
                <TextField
                    className={`${classes.input}`}
                    name='cityName'
                    variant='outlined'
                    label='City Name'
                    size='small'
                    value={query}
                    autoComplete='"address-level2"'
                    onChange={changeCityQuery}>
                </TextField>

                {/* submit */}
                {windowWidth > 800 ?
                    <Button
                        type='submit'
                        className={classes.buttonSubmit}
                        size='small'
                        variant='contained'>
                        Search
                    </Button> :
                    <div className={classes.buttonsMobile}>
                        <IconButton
                            className={classes.btnMobile}
                            type='submit'
                            size='small'>
                            <Search />
                        </IconButton>
                        <IconButton
                            className={classes.btnMobile}
                            type='button'
                            size='small'
                            onClick={(e) => {
                                dispatch(setUnits({
                                    name: unitsData.name === 'Metric' ?
                                        'Imperial' : 'Metric'}));}}>
                            {/* <Settings /> */}
                            °{ unitsData.name === 'Metric' ?'F' : 'C'}
                        </IconButton>
                    </div>}
            </form>
        </Paper>


        {/* results */}
        {unitsData.showMarker && <Paper className={`${classes.paperResult} ${classes.paper}`}>
            {React.Children.toArray(cities.map((city: any, i: number) => {
                const { name, state, country, coord: { lat, lon } } = city;

                return (<Link to={`/city${city.id}`} className={classes.link}>
                    <Grid container className={classes.listTr}
                        alignItems='center'
                        justifyContent='space-between'
                        spacing={1}>

                        <Grid item className={classes.listTd} >
                            {`${name},${state ? state + ', ' : ''} ${country}`} {getFlag(country)}
                        </Grid>

                        {windowWidth > 800 && <Grid item className={classes.listTd}>
                            {`[${lat}, ${lon}]`}
                        </Grid>}

                    </Grid>
                </Link>)
            }))}</Paper>}
    </>)
}
