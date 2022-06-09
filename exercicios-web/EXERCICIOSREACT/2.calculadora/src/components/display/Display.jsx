import React from 'react'
import './Display.css'

export default props =>
    <div className="display">
        <div className="display-numeros">{props.value}</div>
    </div>