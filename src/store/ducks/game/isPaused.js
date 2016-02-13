// local imports
import createBoolDuck from 'util/createBoolDuck'


const duck = createBoolDuck({
    prefix: 'spire/game/isPaused',
    value: false,
})

export const set = duck.set
export default duck.reducer
