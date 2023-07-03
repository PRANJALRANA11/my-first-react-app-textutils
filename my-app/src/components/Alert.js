import React from 'react'

export default function Alert(props) {
    return(
        <>
        <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>{props.alert}</p>
        <hr/>
        </div>
        </>
    )
}
