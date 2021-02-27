const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
        menu: state.menu,
        error: false
      };
    case 'MENU_ERROR':
      return {
        ...state,
        error: true,
        menu: state.menu
      };
    case 'ITEM_ADD_TO_CARD':
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        id: item.id,
        url: item.url
      };
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      }
    default: 
      return state;
  }
}

export default reducer;