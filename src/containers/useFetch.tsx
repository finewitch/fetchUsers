import { useState, useEffect } from 'react'
import fetchData from './utils_fetch'
import mapDataToUI from '../utils/mapDataToUI'
import { User } from '../types/User'

export const useFetch = (query: string) => {
    const [data, setData] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const runEffect = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetchData(query)
                const users = mapDataToUI(result)

                setData(users)
            } catch (err) {
                console.log(err)
                setIsError(true);
            }

            setIsLoading(false);
        };

        runEffect();
    }, [query]);

    return [{ data, isLoading, isError }];
}