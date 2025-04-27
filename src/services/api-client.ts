import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1a9f6ddd895146dab1e1c64576d03923'
    }
})