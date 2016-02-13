// local imports
import createRangeDuck from 'util/createRangeDuck'
import positionFields from 'canvas/positionFields'


const duck = createRangeDuck({
    prefix: 'spire/game/positionField',
    min: 0,
    max: positionFields.length - 1,
    step: 1,
    value: 0,
})

export const set = duck.set
export default duck.reducer
