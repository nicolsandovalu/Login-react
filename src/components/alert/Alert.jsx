import React from "react";

const Alert = ({ message, alertType }) => {

    return(

        <>
            <div class= {`alert alert-${alertType} `} role="alert">
                <p>{message}</p>
            </div>
        </>
    )
}

export default Alert;