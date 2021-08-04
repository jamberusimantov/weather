import React, { useEffect } from "react";
import { Container, Grow, Grid } from '@material-ui/core';
import Router from './App.router'
import './index.css';
import { style } from './style/style.app'
import Header from './components/Header';
import api from "./api";
import { useDispatch,useSelector } from "react-redux";
import { setCity } from "./store/actions/city.actions";
import { setUnits } from "./store/actions/units.actions";
import addMarkers from "./components/City/ControlMap/Markers";
import Brief from "./components/City/Brief";
import ControlMap from "./components/City/ControlMap";
import SearchOptions from "./components/City/SearchOptions";
import SearchLine from "./components/City/SearchLine";


const App = () => {
    const dispatch = useDispatch();
    const { weather: Weather } = api;
    const { getCity } = Weather;
    const classes = style();
    const unitsData = useSelector((state: any) => state.units);
    const { zoom, center, features, showMarker, windowWidth } = unitsData;

    useEffect(() => {
        const onResize = () => {
            dispatch(setUnits({ windowWidth: window.innerWidth }))
        }
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('resize', onResize) }
    }, [dispatch])

    useEffect(() => {
        const getDefaultCity = async function () {
            console.log('get default City...');
            const res = await getCity({ name: "Tel Aviv" })
            if (!res) return;
            const { success, data, error } = res
            if (error) return console.log({ error });
            if (!success) return console.log({ data });
            console.log('save default City...');
            dispatch(setCity(data.data));
            dispatch(setUnits({
                zoom: 13,
                center: [data.data.coord?.lon, data.data.coord?.lat],
                features: addMarkers([[data.data.coord?.lon, data.data.coord?.lat]]),
            }))
        }
        getDefaultCity();
    }, [dispatch, getCity])


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

            <Container maxWidth='lg' className={classes.container}>
                <Header />
                <Grow in>
                    <Container>
                        <Grid
                            container
                            spacing={3}
                            justifyContent='space-between'
                            alignItems='stretch'>

                            {/* city search */}
                            <Grid item xs={12} sm={8}><SearchLine /></Grid>

                            {/* units toggle */}
                            <Grid item xs={12} sm={4}><SearchOptions /></Grid>


                            {/* brief */}
                            <Grid item xs={12} sm={windowWidth < 800 ? 12 : 4}><Brief /></Grid>

                            {/* map */}
                            <Grid item xs={12} sm={windowWidth < 800 ? 12 : 8}>
                                <ControlMap config={{ zoom, center, features, showMarker }} />
                            </Grid>
                        </Grid>

                        <Router />
                    
                    </Container>
                </Grow>
            </Container>
        </div>
    );
};

export default App;

// const getByIdAndSaveToDB = async (id: number) => {
//     let res;
//     console.log('getById...');
//     res = await getByCityId(id)
//     if (!res) return;
//     const { success, data, error } = res
//     if (error) return console.log({ error });
//     if (!success) return console.log({ data });
//     // dispatch(setCity(data.data))
//     const cityObj = { ...data.city, id: `${data.city.id}`, list: data.list }
//     res = await postCity(cityObj)
//     if (!res) return;
//     if (res.error) return console.log({ error:res.error });
//     if (!res.success) return console.log({ data:res.data });
// dispatch(setCity(res.data.data))     
//console.log(res.data);
// }