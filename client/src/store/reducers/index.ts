import { combineReducers } from 'redux';
import query from './form.reducers'
import city from './city.reducers'
import units from './units.reducers'

export default combineReducers({
    query,
    city,
    units,
});