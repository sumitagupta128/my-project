const initState = {
  products: [],
  filter: null
};

export default (state = initState, action) => {
  //console.log("action.type"+action.type)
  switch (action.type) {
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        filter: null
      };
    }
    case "INITIALIZE_PRODUCTS": {
      return {
        ...state,
        products: action.products
      };
    }    
    default: {
      return state;
    }
  }
};
