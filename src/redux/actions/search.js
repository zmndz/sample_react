import Axios from "axios";
export const SEARCH_APP = 'SEARCH_APP'
export const SEARCH_APP_SUCCESS = 'SEARCH_APP_SUCCESS'
export const SEARCH_APP_FAIELD = 'SEARCH_APP_FAIELD'


export function search(text) {
    return { 
        type: SEARCH_APP,
        text 
    }
}

export function searchSuccess(data) {
    return { 
        type: SEARCH_APP_SUCCESS,
        data 
    }
}

export function searchFailed(error) {
    return { 
        type: SEARCH_APP_FAIELD,
        error 
    }
}

export function sendSearchApi(dispatch,text){
    console.log("dsds");
    dispatch(search(text));
    Axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/application_detail/search?q=ar&type=1&Market=1')
    .then(
      response => {
          dispatch(searchSuccess(response));
      }
    )
    .catch(err => {
        dispatch(searchFailed(err));
    })
}


