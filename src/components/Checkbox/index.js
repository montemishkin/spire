// third party imports
import React from 'react'


function Checkbox({name, checked, onChange, ...unusedProps}) {
    return (
        <label {...unusedProps}>
            {name}
            <input
                type='checkbox'
                checked={checked}
                onChange={onChange}
            />
        </label>
    )
}


export default Checkbox
