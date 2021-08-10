import React, { useEffect } from "react";
import { Container, Grow, Grid } from '@material-ui/core';
import Router from './App.router'
import './index.css';
import { style } from './style/style.app'
import Header from './components/Header';
import api from "./api";
import { useDispatch, useSelector } from "react-redux";
// import { setCity } from "./store/actions/city.actions";
import { setUnits } from "./store/actions/units.actions";
// import addMarkers from "./components/WeatherMap/Markers";
import Brief from "./components/Brief";
import WeatherMap from "./components/WeatherMap";
import SearchOptions from "./components/SearchOptions";
import SearchLine from "./components/SearchLine";
// import Loader from "./components/Loader";

const App = () => {
    const dispatch = useDispatch();
    const { weather: Weather } = api;
    const { getCity } = Weather;
    const classes = style();
    const unitsData = useSelector((state: any) => state.units);
    // const cityData = useSelector((state: any) => state.city);
    const { zoom, center, features, showMarker, windowWidth } = unitsData;

    useEffect(() => {
        const onResize = () => {
            dispatch(setUnits({ windowWidth: window.innerWidth }))
        }
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('resize', onResize) }
    }, [dispatch])

    useEffect(() => {
        const getDefaultCity = async () => {
            console.log('get default City...');
            const res = await getCity({ name: "Tel Aviv" })
            console.log({ fetch: res });
        }
        getDefaultCity();
    }, [dispatch, getCity])

    // if (!res) return;
    // const { success, data, error } = res
    // if (error) return console.log({ error });
    // if (!success) return console.log({ res });
    // console.log({ city: data });
    // console.log('save default City...');
    // dispatch(setCity(data));
    // dispatch(setUnits({
    //     zoom: 13,
    //     center: [data.coord?.lon, data.coord?.lat],
    //     features: addMarkers([[data.coord?.lon, data.coord?.lat]]),
    // }))


    return (
        <div className={classes.root}>
            <div id='imageBG'></div>

            <video
                id='videoBG'
                poster='./assets/poster.jpg'
                autoPlay
                loop
                muted>
                <source
                    src='./assets/Storm.mp4'
                    type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Container
                maxWidth='lg'
                className={classes.container}>
                <Header />
                <Grow in>
                    {/* {cityData.id ? */}
                    <Container>
                        <Grid
                            container
                            spacing={3}
                            justifyContent='space-between'
                            alignItems='stretch'>

                            {/* city search */}
                            {window.location.pathname === '/' && <Grid
                                item
                                xs={12}
                                sm={windowWidth < 800 ? 12 : 8}>
                                <SearchLine />
                            </Grid>}

                            {/* units toggle */}
                            {window.location.pathname === '/' && windowWidth > 800 && <Grid
                                item
                                xs={12}
                                sm={4}>
                                <SearchOptions />
                            </Grid>}


                            {/* brief */}
                            <Grid
                                item
                                xs={12}
                                sm={windowWidth < 800 ? 12 : 4}>
                                <Brief />
                            </Grid>

                            {/* map */}
                            <Grid
                                item
                                xs={12}
                                sm={windowWidth < 800 ? 12 : 8}>
                                <WeatherMap
                                    config={{ zoom, center, features, showMarker }} />
                            </Grid>
                        </Grid>
                        <Router />
                    </Container>
                    {/* : */}
                    {/* <div className={classes.flexLoader}> */}
                    {/* <Loader.LoaderSmall /> */}
                    {/* </div>} */}
                </Grow>
            </Container>
        </div>
    );
};

export default App;
