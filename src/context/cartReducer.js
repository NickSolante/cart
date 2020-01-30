import { HANDLE_DETAIL, ADD_TO_CART, USE_EFFECT } from '../type'

export default (state, action) => {
  console.log('below is the new discountProduct state')
  console.log({ ...state })
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
        detailProduct: action.payload
      }
    default:
      return state
  }
}
