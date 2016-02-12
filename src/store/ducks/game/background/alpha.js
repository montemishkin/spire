// local imports
import createRangeDuck from 'util/createRangeDuck'


const duck = createRangeDuck({
    prefix: 'spire/game/background/alpha',
    min: 0,
    max: 1,
    step: 0.001,
    value: 1,
})

export const set = duck.set
export default duck.reducer
