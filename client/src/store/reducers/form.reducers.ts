import * as actionTypes from '../actions/form.actions';

const { SET_FORM } = actionTypes;

const reducer = (
    formData = {
        query:'',
        cities:[]
    },
    action: any) => {
        switch (action.type) {
            case SET_FORM: return action.payload ;
    
            default: return formData;
        }
}
export default reducer;