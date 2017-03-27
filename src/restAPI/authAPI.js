import urls from '../utils/urls'
import fetch from './fetch'

export function restGetUsers(){
    let path = `${urls.host}/users`
    return fetch.get(path)
}

export function restGetVideoList(){
    let path = `${urls.host}/videoList`
    return fetch.get(path)
}
