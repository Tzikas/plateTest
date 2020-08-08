import axios from 'axios';
let baseURL;
console.log(process.env)
process.env.NODE_ENV === 'production'
  // ? (baseURL = 'https://sheltered-dawn-07708.herokuapp.com')
  ? (baseURL = 'https://rocky-ocean-03987.herokuapp.com/api')
  : (baseURL = 'http://localhost:5000/api');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  }
};

export default actions;
