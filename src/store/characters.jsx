import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan, apiCallSuccess } from './api'

const slice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    loading: false
  },

  reducers: {
    charactersRequested: (characters, action) => {
      characters.loading = true
    },

    charactersReceived: (characters, action) => {
      characters.list = action.payload
      characters.loading = false
    },

    charactersRequestFailed: (characters, action) => {
      characters.loading = false
    }
  }
})

export default slice.reducer

const { charactersRequested, charactersReceived, charactersRequestFailed } =
  slice.actions

const url = 'characters'

export const loadCharacters = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: charactersRequested.type,
      onSuccess: charactersReceived.type,
      onError: charactersRequestFailed.type
    })
  )
}
