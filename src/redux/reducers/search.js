import {SEARCH_APP,SEARCH_APP_SUCCESS,SEARCH_APP_FAIELD} from'../actions/search'
const INITIAL_STATE = {
    text: '',
    data:null,
    error:''
  };
  
  function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SEARCH_APP:
        return { ...state, 
            text: action.text 
        };
        case SEARCH_APP_SUCCESS:
        return { ...state, 
            data: action.data
        };
        case SEARCH_APP_FAIELD:
        return { ...state, 
            error: action.error
        };
      default: return state;
    }
  }
  
  export default searchReducer;