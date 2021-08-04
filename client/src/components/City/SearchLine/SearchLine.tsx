import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper, IconButton, Grid } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import useStyle from './style';
import { setForm } from '../../../store/actions/form.actions'
import { setCity } from '../../../store/actions/city.actions'
import { setUnits } from "../../../store/actions/units.actions";
import api from '../../../api';
import { hasFlag } from 'country-flag-icons';
import addMarkers from "../ControlMap/Markers";

export default function SearchLine(props: any) {
    const classes = useStyle();
    const formData = useSelector((state: any) => state.query);
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    const { cities, query } = formData
    const dispatch = useDispatch();

    const getCityWeather = async (i: number) => {
        const { weather } = api;
        const { fetchNewCity } = weather;
        console.log('get City Weather...');
        const res = await fetchNewCity(cities[i]?.id);
        if (!res) return;
        const { success, data, error } = res
        if (error) return console.log({ error });
        if (!success) return console.log({ data });
        console.log('save City Weather...');
        dispatch(setCity({ ...data.city, id: `${data.city.id}`, list: data.list }));
        dispatch(setUnits({
            zoom: 13,
            center: [data.city?.coord?.lon, data.city?.coord?.lat],
            features: addMarkers([[data.city?.coord?.lon, data.city?.coord?.lat]]),
            showMarker: false
        }))
    }

    const changeCityQuery = (e: any) => dispatch(setForm({
        ...formData, query: e.target.value
    }))

    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (!formData.query) return console.log('no query');
        const { weather } = api;
        const { getCityLocationObj } = weather;
        const res = await getCityLocationObj({ name: formData.query });
        const { success, data, error } = res
        if (error) return console.log({ error });
        if (!success) return console.log(data);
        dispatch(setForm({ ...formData, cities: data.data }))
        if (data.data.length > 1) {
            let centers: number[][] = [];
            cities.forEach((element: { coord: { lon: number, lat: number } }) => {
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
        if (data.data.length === 1) {
            const { lat, lon } = data.data[0].coord
            dispatch(setUnits({
                zoom: 6,
                center: [lon, lat],
                features: addMarkers([[lon, lat]]),
                showMarker: true
            }))
        }
    }
    const getFlag = (country: string) => hasFlag(country) ?
        <img alt={`${country}`}
            className={classes.flag}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} />
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
                    <IconButton
                        type='submit'
                        className={classes.buttonSubmitMobile}
                        size='small'>
                        <Search />
                    </IconButton>}
            </form>
        </Paper>


        {/* results */}
        {unitsData.showMarker && <Paper className={`${classes.paperResult} ${classes.paper}`}>
            {React.Children.toArray(cities.map((city: any, i: number) => {
                const { name, state, country, coord: { lat, lon } } = city;

                return (<Grid container className={classes.listTr}
                    alignItems='center'
                    justifyContent='space-between'
                    spacing={1}
                    onClick={() => getCityWeather(i)}>

                    <Grid item className={classes.listTd} >
                        {`${name},${state ? state + ', ' : ''} ${country}`} {getFlag(country)}
                    </Grid>

                    {windowWidth > 800 && <Grid item className={classes.listTd}>
                        {`[${lat}, ${lon}]`}
                    </Grid>}

                </Grid>)
            }))}</Paper>}
    </>)
}
