import { User } from '../types/User'
export default function sortUsers(order: string, users: User[]): any {
    let res
    if (order === 'desc')
        res = [...users].sort((a: any, b: any) => {
            if (a.name < b.name) { return 1; }
            if (a.name > b.name) { return -1; }
            return 0;
        })
    if (order === 'asc')
        res = [...users].sort((a: any, b: any) => {
            if (a.name > b.name) { return 1; }
            if (a.name < b.name) { return -1; }
            return 0;
        })
    return res

}