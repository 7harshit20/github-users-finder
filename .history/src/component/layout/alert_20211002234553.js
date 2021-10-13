import React from 'react'

export const alert = ({ alert }) => {
    return (
        alert !== NULL && (
            <div className={`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}
