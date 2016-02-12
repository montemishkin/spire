// local imports
import createRangeDuck from 'util/createRangeDuck'


const duck = createRangeDuck({
    prefix: 'spire/game',
    min: 0,
    max: 2,
    step: 0.001,
    value: 0.1,
})

export const set = duck.set
export default duck.reducer
