export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'GET_CHARACTERS':
      return { ...state, characters: action.payload, loading: false }
  }
  return { ...state }
}
