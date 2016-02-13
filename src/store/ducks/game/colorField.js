// local imports
import createRangeDuck from 'util/createRangeDuck'
import colorFields from 'canvas/colorFields'


const duck = createRangeDuck({
    prefix: 'spire/game/colorField',
    min: 0,
    max: colorFields.length - 1,
    step: 1,
    value: 0,
})

export const set = duck.set
export default duck.reducer
