//Base  da API:https://api.themoviedb.org/3
//url da API:movie/now_playing?api_key=2db5c2a96808bbf80302c966058dcf00&language=pt-BR

import axios from  'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;