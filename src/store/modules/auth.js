import axios from "axios";

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  };
  const mutations = {
    auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
  };
  const actions= {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'login', data: user, method: 'POST' })
          .then(resp => {
              console.log({resp})
            const token = resp.token
            const user = resp.user
            localStorage.setItem('token', resp.token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)

            resolve(resp)
            window.location.replace("/home")
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    logout({commit}){
        return new Promise((resolve) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  };
  const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  };

export default {
    state,
    getters,
    actions,
    mutations,
  };