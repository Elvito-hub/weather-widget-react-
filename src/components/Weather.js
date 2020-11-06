import axios from 'axios';
const KEY='ae411db01c3e14f0c4feadcc34897661';
export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: KEY
    }
})