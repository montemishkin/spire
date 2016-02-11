// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


function Button({style, ...unusedProps}) {
    return (
        <button
            {...unusedProps}
            style={[styles.button, style]}
        />
    )
}


export default radium(Button)
