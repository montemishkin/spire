// third party imports
import React from 'react'


function Slider({name, value, min, max, step, onChange, ...unusedProps}) {
    return (
        <label {...unusedProps}>
            {name}
            <input
                type='range'
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={onChange}
            />
        </label>
    )
}


Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
}


export default Slider
