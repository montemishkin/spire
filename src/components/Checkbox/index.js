// third party imports
import React from 'react'


function Checkbox({name, value, onChange, ...unusedProps}) {
    return (
        <label {...unusedProps}>
            {name}
            <input
                type='checkbox'
                value={value}
                onChange={onChange}
            />
        </label>
    )
}


export default Checkbox
