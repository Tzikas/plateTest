import React, { createContext, useState } from 'react'
import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  //? (baseURL = 'here should be your production endpoint')
  ? (baseURL = "https://rocky-ocean-03987.herokuapp.com")
  : (baseURL = 'http://localhost:5000');


console.log(process.env)

const service = axios.create({ withCredentials: true, baseURL });



const Actions = () => {

  const [user, setUser] = useState({})

  return {
    user: user, 
    setUser: setUser,
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
}

export const actionsContext = React.createContext(Actions);


export default Actions;
