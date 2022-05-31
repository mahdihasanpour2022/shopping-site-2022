

const initialProductsState = {
  loading: false,
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
  error: null,
  categories:localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [],
  filteredCategory: [],
  search :[],
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_LOADING":
      return { ...state, loading: action.payload };
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_FAILED":
      return { ...state, error: action.payload };
    case "CREATE_CATEGORY":
      return { ...state, categories: action.payload };
    case "FILTER_CATEGORY":
      const filtered = state.products.filter(item => item.Category === action.payload)
      state.filteredCategory = filtered;
      return { ...state, filteredCategory: state.filteredCategory };
    case "REMOVE_FILTER_CATEGORY":
      state.filteredCategory = [];
      return { ...state, filteredCategory: state.filteredCategory };

      case "SEARCH_IN_PRODUCTS":
       const searchedProducts =state.products.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        return {...state ,search:searchedProducts  };

    default:
      return state;
  }
}
export default productsReducer;

