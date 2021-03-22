import axios from 'axios'


//Used to call your API, we're just creating a base configuration.
const BASE_API = axios.create({
    url: 'http://localhost:4000/'
})

export {BASE_API}