import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface User {
    sub: string,
    name: string
    picture: string
}

export function getUser(): User {
    const token = Cookies.get('token')

    if(!token) {
        throw new Error('Unauthenticated')
    }

    const user: User = jwtDecode(token)

    return user
}