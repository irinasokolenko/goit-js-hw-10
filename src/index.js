
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
axios.defaults.common['x-api-key'] = live_0OHVSrZmYOum5F9rOfmcgMp6UIbUTa5AQtDZVhO6MZ85hNASRodSA4IbSKDrBp2Z;
export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`).then(Response => Response.data);
}
export function fetchCatByBreed(breedId){
    return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(Response => {
        return Response.data;
    });
}
fetchBreeds().then(consol.log);
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';