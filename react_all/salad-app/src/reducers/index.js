const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  totalPrice: 0
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
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;

      const itemInd = state.items.findIndex(item => item.id === id);
      if (itemInd >= 0) {
        const itemInState = state.items.find(item => item.id === id);
        const newItem = {
          ...itemInState,
          quantity: ++itemInState.quantity
        }
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemInd),
            newItem,
            ...state.items.slice(itemInd + 1)
          ],
          totalPrice: state.totalPrice + newItem.price
        }
      }
      // если товара раньше не было в корзине
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        id: item.id,
        url: item.url,
        quantity: 1
      };
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        totalPrice: state.totalPrice + newItem.price
      };
    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      const price = state.items[itemInd]['price'] * state.items[itemIndex]['quantity'];
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        totalPrice: state.totalPrice - price
      }
    default: 
      return state;
  }
}

export default reducer;