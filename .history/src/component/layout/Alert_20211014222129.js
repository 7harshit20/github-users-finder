import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    // const { alert } = alertContext;
    return (
        alertContext.alert !== null && (
            <div className={`alert alert-${alertContext.alert.type}`}>
                {alertContext.alert.msg}
            </div>
        )
    )
}

export default Alert;
