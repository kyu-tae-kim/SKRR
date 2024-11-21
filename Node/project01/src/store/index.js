import { createStore } from 'vuex'
import { todo } from './todos'
import persistedstate from 'vuex-persistedstate'


export default createStore({
    modules: {
        todo : todo
    },
    // plugins: [persistedstate({paths: ['todo.todos']})]
})