import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Hourly from "../../components/City/Hourly";
import FiveDays from "../../components/City/FiveDays";
import { useParams } from "react-router";


export default function CityPage() {
    const { id } = useParams<{ id: string }>();
    const unitsData = useSelector((state: any) => state.units);
    const { windowWidth } = unitsData;
    console.log({ cityId: id });


    return (
        <Grid
            container
            spacing={3}
            justifyContent='space-between'
            alignItems='stretch'>

            <Grid item xs={12} sm={12}>
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
            </Grid>

        </Grid>
    )
}
