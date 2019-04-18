import * as typesActions from '../constants/actionsTypes';
import resumeApi from '../api/mockResumeApi';

export function loadResumeSuccess(resume) {
    return { type: typesActions.LOAD_RESUME_SUCCESS, resume };
}

export function loadResume() {
    return function (dispatch) {
        resumeApi.getResume().then(resume => {
            dispatch(loadResumeSuccess(resume));
        }).catch(error => { throw (error); });
    };
}