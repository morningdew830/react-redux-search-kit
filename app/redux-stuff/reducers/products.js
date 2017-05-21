export default function products( state = {  }, action ) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      console.log('GET_PRODUCTS', action)
      return Object.assign({}, state, action)
    default:
      return state
  }
}
