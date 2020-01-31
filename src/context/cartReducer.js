import { HANDLE_DETAIL, ADD_TO_CART } from '../type'

export default (state, action) => {
  console.log('below is the new discountProduct state')
  console.log({ ...action.payload })
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        product: action.payload.tempProduct,
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
