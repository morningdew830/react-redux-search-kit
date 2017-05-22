export default function products( state = {  }, action ) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      console.log('GET_PRODUCTS', action)
      return Object.assign({}, state, action)
    case 'SET_LAYOUT':
      console.log('SET_LAYOUT', action)
      return Object.assign({}, state, { layout: action.layout })
    default:
      return state
  }
}
