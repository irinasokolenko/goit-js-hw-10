const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
axios.defaults.common['x-api-key'] = 'live_0OHVSrZmYOum5F9rOfmcgMp6UIbUTa5AQtDZVhO6MZ85hNASRodSA4IbSKDrBp2Z';
export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds');
}
export function fetchCatByBreed(breedId){
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids= ${breedId}`);
}