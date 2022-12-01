import Axios from "axios";

const state = {
  todos: null,
};

const getters = {
  TODOS: (state) => {
    return state.todos;
  },
};

const mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload;
  },

  ADD_TODO: (state, payload) => {
    state.todos.push(payload);
  },
};

const actions = {
  GET_TODO: async (context) => {
    let { data } = await Axios.get("http://yourwebsite.com/api/todo");
    context.commit("SET_TODO", data);
  },

  SAVE_TODO: async (context, payload) => {
    await Axios.post("http://yourwebsite.com/api/todo");
    context.commit("ADD_TODO", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
