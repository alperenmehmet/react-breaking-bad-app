import React, { useContext, useEffect, useReducer } from 'react'
import { reducer } from './reducers/reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  characters: [],
  quotes: []
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(
      'https://www.breakingbadapi.com/api/characters'
    )
    const characters = await response.json()
    dispatch({ type: 'GET_CHARACTERS', payload: characters })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(state.characters)
  return <AppContext.Provider value={''}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
