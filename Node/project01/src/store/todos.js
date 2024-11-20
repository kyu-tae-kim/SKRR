export const todo ={

namespaced: true,

 state() {
    return {
      todos: [
        {id:1, title:'할일 1', done: true},
        {id:2, title:'할일 2', done: false},
        {id:3, title:'할일 3', done: false}
      ]
    }
  },
  // Computed (state의 저장된 데이터의 computed를 정의하는 공간)
  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done === true).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  // state를 변경할 수 있는 함수가 정의되는 공간
  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    doneYN(state, doneState) {
      state.todos.filter( (todo) => todo.id === doneState.id)[0].done = doneState.done
    }
  },
  // commit (mutations에 정의된 함수를 커밋을 통해서 변경)
  // 비동기 처리
  // $store.dispatch(add)
  actions: {
    add({ commit }, item) {
      commit('add', item)
    }
  },

}
