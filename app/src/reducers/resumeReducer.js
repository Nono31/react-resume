import initialState from './initialState';
import * as typesActions from '../constants/actionsTypes';

export default function resumeReducer(state = initialState.resume, action) {
    switch (action.type) {
        case typesActions.LOAD_RESUME_SUCCESS:
            return action.resume;

        default:
            return state;
    }
}