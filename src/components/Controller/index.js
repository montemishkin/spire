// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import downloadCanvasImage from 'util/downloadCanvasImage'
import {restart} from 'store/ducks/game'
import {set as setIsPaused} from 'store/ducks/game/isPaused'
import {set as setShouldModPosition} from 'store/ducks/game/shouldModPosition'
import {set as setShouldRandomizePosition} from 'store/ducks/game/shouldRandomizePosition'
import {set as setDt} from 'store/ducks/game/dt'
import {set as setNumDots} from 'store/ducks/game/dots/num'
import {set as setBgAlpha} from 'store/ducks/game/background/alpha'
import {set as setColorField} from 'store/ducks/game/colorField'
import {set as setPositionField} from 'store/ducks/game/positionField'
import Checkbox from 'components/Checkbox'
import Slider from 'components/Slider'
import Button from 'components/Button'


function Controller({
    isPaused,
    shouldModPosition,
    shouldRandomizePosition,
    dt,
    numDots,
    bgAlpha,
    colorField,
    positionField,
    dispatch,
    style,
    ...unusedProps,
}) {
    return (
        <div
            {...unusedProps}
            style={[styles.container, style]}
        >
            <Button
                onClick={() => dispatch(restart())}
            >
                restart
            </Button>
            <Checkbox
                name='isPaused'
                checked={isPaused}
                onChange={() => dispatch(setIsPaused(!isPaused))}
            />
            <Checkbox
                name='shouldModPosition'
                checked={shouldModPosition}
                onChange={() => dispatch(setShouldModPosition(!shouldModPosition))}
            />
            <Checkbox
                name='shouldRandomizePosition'
                checked={shouldRandomizePosition}
                onChange={() => dispatch(setShouldRandomizePosition(!shouldRandomizePosition))}
            />
            <Slider
                name='dt'
                {...dt}
                onChange={event => dispatch(setDt(event.target.value))}
            />
            <Slider
                {...numDots}
                name='numDots'
                onChange={event => dispatch(setNumDots(event.target.value))}
            />
            <Slider
                {...bgAlpha}
                name='bgAlpha'
                onChange={event => dispatch(setBgAlpha(event.target.value))}
            />
            <Slider
                {...colorField}
                name='colorField'
                onChange={event => dispatch(setColorField(event.target.value))}
            />
            <Slider
                {...positionField}
                name='positionField'
                onChange={event => dispatch(setPositionField(event.target.value))}
            />
            <Button onClick={downloadCanvasImage}>
                save
            </Button>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        isPaused: state.game.isPaused,
        shouldModPosition: state.game.shouldModPosition,
        shouldRandomizePosition: state.game.shouldRandomizePosition,
        dt: state.game.dt,
        numDots: state.game.dots.num,
        bgAlpha: state.game.background.alpha,
        colorField: state.game.colorField,
        positionField: state.game.positionField,
    }
}


export default connect(mapStateToProps)(radium(Controller))
