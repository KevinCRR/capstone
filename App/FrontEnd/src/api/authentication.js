import {BASE_API} from './constants'


export class AuthenticationAPI {
    static async login({email, password}){
        try {
            //await because it returns a promise [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise]
            //call our API config method, specified in constants.js
            //specify the route '/login', pass any data if needed. 
            const response = await BASE_API.post('/login',{email, password});
            // return an object of success and the response message => data: {message: string, ...}
            return {success: true, message: response.data.message || ''}
        }catch (e){
            return {success: false, message: e.response.data.message || ''}
            
        }
    }

    static async register(data){
        try {
            const response = await BASE_API.post('/register',data);
            return {success: true, message: response.data.message || ''}
        }catch (e){
            return {success: false, message: e.response.data.message || ''}
            
        }
    }
}
