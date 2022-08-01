import React, { useContext, useEffect, useReducer } from 'react'
import { reducer } from './reducers/reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  characters: [],
  quotes: [],
  singleCharacter: {},
  char_id: ''
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCharacters = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(
      'https://www.breakingbadapi.com/api/characters'
    )
    const characters = await response.json()
    dispatch({ type: 'GET_CHARACTERS', payload: characters })
  }

  const fetchQuotes = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch('https://www.breakingbadapi.com/api/quotes')
    const quotes = await response.json()
    dispatch({ type: 'GET_QUOTES', payload: quotes })
  }

  const getSingleCharacter = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/${char_id}`
    )
    const singleCharacter = await response.json()
    dispatch({ type: 'GET_SINGLE_CHARACTER', payload: singleCharacter })
  }

  useEffect(() => {
    fetchCharacters()
    fetchQuotes()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleCharacter
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
