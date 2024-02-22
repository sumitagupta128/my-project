const initialWishlistState = {
    totalWishlistCost: 0,
    totalWishlistProducts: 0,
    wishlistitems: []
  };
  
  export default (state = initialWishlistState, action) => {
    
    switch (action.type) {
      case "ADD_TO_WISHLIST_CART": {
        return state.wishlistitems.find(item => item.name === action.product.name)
          ? {
            totalWishlistProducts: state.totalWishlistProducts + 1,
            totalWishlistCost: state.totalWishlistCost + action.product.cost,
            wishlistitems: state.wishlistitems.map(item => {
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
              totalWishlistProducts: state.totalWishlistProducts + 1,
              totalWishlistCost: state.totalWishlistCost + action.product.cost,            
              wishlistitems: [...state.wishlistitems, { ...action.product, quantity: 1 }]
            };
            
      }
      case "SET_WISHLIST_QUANTITY": {
        // Set updated quantity
        let reviseQuantity = state.wishlistitems.map(item => {
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
          totalWishlistProducts: reviseTotalQuantity,
          totalWishlistCost: reviseTotalCost,
          wishlistitems: reviseQuantity
        };
      }
      case "REMOVE_WISHLIST_ITEM": {
        let findItem = state.wishlistitems.find(item => item.name === action.name);
  
        if (findItem) {
          let totalCostOfItem = findItem.quantity * findItem.cost;
          return {
            totalWishlistProducts: state.totalWishlistProducts - findItem.quantity,
            totalWishlistCost: state.totalWishlistCost - totalCostOfItem,
            wishlistitems: state.wishlistitems.filter(item => item.name !== action.name)
          };
        } else {
          return state;
        }
      }
      case "CLEAR_WISHLIST_CART":{
        if(state.wishlistitems.length>0)
        {
          return{
            wishlistitems: state.wishlistitems=[],
            totalWishlistProducts: state.totalWishlistProducts=0,
            totalWishlistCost: state.totalWishlistCost=0,
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
  