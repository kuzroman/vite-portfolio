// store/index.js
import { createStore } from 'vuex'
// import stack from './modules/stack'
import app from './modules/app'
import leaderBoard from './modules/leaderBoard'
import game from './modules/game'

const store = createStore({
    modules: {
        app,
        game,
        leaderBoard,
        // stack,
    },
})

export default store
