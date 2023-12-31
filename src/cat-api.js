
const url = 'https://api.thecatapi.com/v1';
const api_key ='live_0OHVSrZmYOum5F9rOfmcgMp6UIbUTa5AQtDZVhO6MZ85hNASRodSA4IbSKDrBp2Z';
const options = {
    method: 'GET',
    heders: {
        'x-api-key': api_key,
    },
    };

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};

