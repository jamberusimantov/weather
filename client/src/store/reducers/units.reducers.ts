import * as actionTypes from '../actions/units.actions';
import addMarkers from '../../components/City/ControlMap/Markers';

const { SET_UNITS } = actionTypes;

const reducer = (
    units = {
        name: 'Metric',
        pressure: 'hPa',
        zoom: 0,
        center: [0, 0],
        features: addMarkers([[0, 0]]),
        showMarker: false,
        windowWidth: window.innerWidth,
    },

    action: any) => {
    switch (action.type) {
        case SET_UNITS: return { ...units, ...action.payload };

        default: return units;
    }
}
export default reducer;