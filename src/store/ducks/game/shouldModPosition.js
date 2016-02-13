// local imports
import createBoolDuck from 'util/createBoolDuck'


const duck = createBoolDuck({
    prefix: 'spire/game/shouldModPosition',
    value: true,
})

export const set = duck.set
export default duck.reducer
