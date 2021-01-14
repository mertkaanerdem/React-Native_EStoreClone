function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const {item} = action.payload;
      return {...state, basket: [...state.basket, item]};

    // case 'SET_PRODUCTS':
    //   const {products} = action.payload;
    //   return {...state, products};

     case 'ADD_TO_FAVORITE':
         const {item} = action.payload;
         const index = state.favorites.findIndex((fav) => fav.id == item.id );
         return index === -1
          ? {...state, favorites: [...state.favorites, item]} : state;

    default:
      return state;
  }
}

export default reducer;
