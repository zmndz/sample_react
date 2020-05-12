import Axios from 'axios';

export function searchHandler (apiURL) {
    Axios.get(process.env.REACT_APP_BASE_URL + apiURL)
    .then(response => {
        const data = response.data;
    });
}