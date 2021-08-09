import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Hourly from "../../components/City/Hourly";
import FiveDays from "../../components/City/FiveDays";
import { useParams } from "react-router";
import addMarkers from "../../components/WeatherMap/Markers";
import api from "../../api";
import { setCity } from "../../store/actions/city.actions";
import { setUnits } from "../../store/actions/units.actions";



export default function CityPage() {
    const dispatch = useDispatch();
    const { query } = useParams<{ query: string }>();
    const unitsData = useSelector((state: any) => state.units);
    const cityData = useSelector((state: any) => state.city);
    const { windowWidth } = unitsData;
    
    useEffect(() => {
        const { weather } = api;
        const { getCityWeather } = weather;
        const Weather = async (id: string) => {
            if (!id) return console.log("city id is required");
            console.log(`getting City id: ${id} Weather...`);
            if (Number.parseInt(query)) {
                const res = await getCityWeather({ id })
                const { success, data, error } = res
                if (error) return console.log({ error });
                if (!success) return console.log({ res });
                console.log(`saving City id: ${id} Weather...`);
                dispatch(setCity({ ...data.data.city, list: data.data.list }));
                dispatch(setUnits({
                    zoom: 13,
                    center: [data.data.city.coord?.lon, data.data.city.coord?.lat],
                    features: addMarkers([[data.data.city.coord?.lon, data.data.city.coord?.lat]]),
                }))
            }
        }
        Weather(query);
    }, [dispatch, query])

    return (
        <Grid
            container
            spacing={3}
            justifyContent='space-between'
            alignItems='stretch'>

            {cityData.id && <Grid item xs={12} sm={12}>
                <Grid
                    container
                    spacing={3}
                    justifyContent='space-between'
                    alignItems='stretch'>

                    <Grid item xs={12} sm={windowWidth < 1000 ? 12 : 6}>
                        <Hourly />
                    </Grid>

                    <Grid item xs={12} sm={windowWidth < 1000 ? 12 : 6}>
                        <FiveDays />
                    </Grid>
                </Grid>
            </Grid>}

        </Grid>
    )
}
