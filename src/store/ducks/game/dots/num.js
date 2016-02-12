// local imports
import createRangeDuck from 'util/createRangeDuck'


const duck = createRangeDuck({
    prefix: 'spire/game/dots/num',
    min: 0,
    max: 1000,
    step: 1,
    value: 10,
})

export const set = duck.set
export default duck.reducer
