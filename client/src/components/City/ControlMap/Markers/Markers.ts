import { Style, Icon } from "ol/style";
import mapConfig from "../config.json";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";


const addMarkers = (lonLatArray:number[][]) => {
    var iconStyle = new Style({
        image: new Icon({
            src: mapConfig.markerImage32,
        }),
    });
    let features = lonLatArray.map((item) => {
        let feature = new Feature({
            geometry: new Point(fromLonLat(item)),
        });
        feature.setStyle(iconStyle);
        return feature;
    });
    return features;
}
export default addMarkers;