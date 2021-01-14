function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const {basket} = action.payload;
      return {...state, basket: [...state.basket, basket]};

    case 'SET_PRODUCTS':
      const {products} = action.payload;
      return {...state, products};

    // case 'ADD_TO_FAVORITE':
    //     const

    default:
      return state;
  }
}

export default reducer;
