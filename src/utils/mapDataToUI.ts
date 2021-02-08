import { User } from '../types/User'

export default function mapDataToUI(data: []): User[] {
    return data.map((user: any, index) => ({
        key: index,
        name: user.name,
        username: user.username,
        email: user.email,
        website: user.website,
        company: {
            name: user.company.name,
            cp: user.company.catchPhrase,
        },
        address: {
            city: user.address.city,
            zipcode: user.address.zipcode,
            street: user.address.street,
        }
    })
    )
}