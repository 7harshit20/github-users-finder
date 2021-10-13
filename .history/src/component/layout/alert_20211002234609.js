import React from 'react'

export const Alert = ({ alert }) => {
    return (
        alert !== NULL && (
            <div className={`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}
