import React from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { osm, vector } from "./Source";
import { fromLonLat } from "ol/proj";
import { Controls, FullScreenControl } from "./Controls";



const WeatherMap = (props) => {
    const { config: { zoom, center, features, showMarker, } } = props;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '10px'
        }}>
            <Map center={fromLonLat(center)} zoom={zoom} >
                <Layers >
                    <TileLayer source={osm()} zIndex={0} />
                    {showMarker &&
                        < VectorLayer source={vector({ features })} />
                    }
                </Layers>

                <Controls >
                    <FullScreenControl />
                </Controls>
            </Map>
        </div>
    );
};

export default WeatherMap;