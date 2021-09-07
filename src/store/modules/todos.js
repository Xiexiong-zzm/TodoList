import axios from 'axios'; // 引入axios用于请求数据

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    getTodoList: async ({commit}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos') // 请求数据
    
        commit('setTodos',response.data)
    },
    addTodo: async({commit},title) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed: false})  //增加数据

        console.log(response.data)
        commit('newTodo',response.data)
    },
    filterTodos: async({commit},e) => {
        console.log(e)
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        commit('setTodos',response.data)
    },
    deleteTodo: async({commit},id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo',id)
    },
    async updateTodo({commit}, params) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        commit('updateTodo',params)
    } 
};

const mutations  = {
    setTodos: (state, todos) => {state.todos = todos},
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, params) => {
        const index = state.todos.findIndex(todo => todo.id === params.id)
        if(index !== -1) {
            state.todos.splice(index, 1,params)
        }
    }
};



export default {
    state,
    getters,
    actions,
    mutations
}