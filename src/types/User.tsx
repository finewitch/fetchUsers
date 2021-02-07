export interface User {
    name: string,
    email: string,
    website: string,
    company: {
        name: string
        cp: string
    },
    address: {
        city: string
        zipcode: string
        street: string
    }
}