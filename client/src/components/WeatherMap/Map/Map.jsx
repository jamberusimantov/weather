import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";

const Map = (props) => {
    const { children, zoom, center } = props;
    const mapRef = useRef(null);
    const [map, setMap] = useState();

    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };
        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef?.current || undefined);

        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, [zoom, center]);

    // zoom change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setZoom(zoom);
    }, [center, map, zoom]);

    // center change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setCenter(center)
    }, [center, map])

    return (
        < MapContext.Provider value={{ map }} >
            <div ref={mapRef} className="ol-map" >
                {children}
            </div>
        </ MapContext.Provider>
    )
}
export default Map;