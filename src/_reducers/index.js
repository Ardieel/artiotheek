import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './user.reducer';
import { alert } from './alert.reducer';
import {reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    form: formReducer
});

export default rootReducer;