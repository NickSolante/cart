import { HANDLE_DETAIL, ADD_TO_CART } from '../type'

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        users: [],
        loading: false
      }
    case HANDLE_DETAIL:
      return {
        ...state,
        loading: false,
        repos: action.payload
      }
    default:
      return state
  }
}
