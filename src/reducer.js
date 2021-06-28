import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'

const reducer = (state, action) => {
  if (action.type === 'REMOVE_FAVORITE') {
    state = {
      ...state,
      favorites: state.favorites.filter((item) => item.id !== action.payload),
      amount: state.amount--,
    }
    return state
  }
  if (action.type === 'ADD_FAVORITE') {
    const id = action.payload.id
    if (
      !state.favorites.find((item) => item.id === id) &&
      state.favorites.length < 5
    ) {
      state = {
        ...state,
        favorites: [...state.favorites, action.payload],
        amount: state.amount++,
      }
    } else {
      console.log(
        `herói já favoritado e/ou limite de 5 favoritos, número de heróis favoritados: ${state.favorites.length}`
      )
    }
    return state
  }
  return state
}

export default reducer
