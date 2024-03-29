const initialState = {
  totalCost: 0,
  totalProducts: 0,
  items: []
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case "ADD_TO_CART": {
      return state.items.find(item => item.name === action.product.name)
        ? {
            totalProducts: state.totalProducts + 1,
            totalCost: state.totalCost + action.product.cost,
            items: state.items.map(item => {
              if (item.name === action.product.name) {
                return {
                  ...item,
                  quantity: item.quantity + 1
                };
              }

              return item;
            })
          }
        : {
            totalProducts: state.totalProducts + 1,
            totalCost: state.totalCost + action.product.cost,            
            items: [...state.items, { ...action.product, quantity: 1 }]
          };
          
    }
    case "SET_QUANTITY": {
      // Set updated quantity
      let reviseQuantity = state.items.map(item => {
        if (item.name === action.name) {
          return {
            ...item,
            quantity: action.quantity
          };
        }
        return item;
      });

      // Recompute total quantity
      let reviseTotalQuantity = reviseQuantity.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0);

      // Recompute total cost
      let reviseTotalCost = reviseQuantity.reduce((prev, curr) => {
        return prev + curr.quantity * curr.cost;
      }, 0);

      return {
        totalProducts: reviseTotalQuantity,
        totalCost: reviseTotalCost,
        items: reviseQuantity
      };
    }
    case "REMOVE_ITEM": {
      let findItem = state.items.find(item => item.name === action.name);

      if (findItem) {
        let totalCostOfItem = findItem.quantity * findItem.cost;
        return {
          totalProducts: state.totalProducts - findItem.quantity,
          totalCost: state.totalCost - totalCostOfItem,
          items: state.items.filter(item => item.name !== action.name)
        };
      } else {
        return state;
      }
    }
    case "CLEAR_CART":{
      if(state.items.length>0)
      {
        return{
          items: state.items=[],
          totalProducts: state.totalProducts=0,
          totalCost: state.totalCost=0,
        }
      }
      else{
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
