import React from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { osm, vector } from "./Source";
import {
    fromLonLat
    // , get 
} from "ol/proj";
// import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";
// import FeatureStyles from "./Features/Styles";
// import mapConfig from "./config.json";
// import CheckBox from "./CheckBox/CheckBox";

const ControlMap = (props) => {
    const { config: { zoom, center, features, showMarker, } } = props;

    // const [showLayer, setShowLayer] = useState(true);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor:'#fff',
            borderRadius:'10px'
        }}>
            <Map center={fromLonLat(center)} zoom={zoom} >
                <Layers >
                    <TileLayer source={osm()} zIndex={0} />
                    {/* {showLayer && <VectorLayer source={
                        vector({
                            features: new GeoJSON().readFeatures(geojsonObjects[0], {
                                featureProjection: get("EPSG:3857"),
                            }),
                        }
                        )}
                        style={FeatureStyles.MultiPolygon} />} */}

                    {showMarker && < VectorLayer source={
                        vector({ features })
                    } />}

                </Layers>

                <Controls >
                    <FullScreenControl />
                </Controls>
            </Map>

            {/* <div ><CheckBox source={{
                checked: showLayer,
                label: "Tel Aviv",
                setChecked: setShowLayer
            }} />
            </div>

            <hr />

            <div ><CheckBox source={{
                checked: showMarker,
                label: "Show markers",
                setChecked: setShowMarker
            }} />
            </div> */}
        </div>
    );
};

export default ControlMap;