import fetch from 'isomorphic-fetch';
import Promise from 'promise';

const API_KEY = '5a043a1bd95bf3ee500eb89de107b41e';
const API_URL = 'http://api.openweathermap.org/data/2.5';

const apiCall = (url) => {
  return fetch(url)
    .then(response => {
      if (response.status >= 400) {
        return Promise.reject('Invalid response');
      }

      return response.json();
    })
    .then(json => {
      if (parseInt(json.cod) !== 200) {
        return Promise.reject('Invalid response');
      }

      return json;
    });
};

export const queryAPI = (args) => {
  return apiCall(`${API_URL}/weather?q=${city.trim()}&appid=${API_KEY}`);
};
