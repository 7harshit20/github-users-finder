import React, { useReducer } from "react";
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const initialState = {
        alert: null
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (message, background) => {
        dispatch({
            type: SET_ALERT,
            payload: {
                msg: message,
                type: background
            }
        })
        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
        }), 3000);

    }

    return <alertContext.Provider
        value={{
            alert: state.alert,
            setAlert
        }}
    >
        {props.children};
    </alertContext.Provider>
}

export default AlertState;