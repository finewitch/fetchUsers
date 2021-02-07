export default async function fetchData(query: string): Promise<[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/' + query)
    const data = await response.json()
    return data
}