
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): [boolean, T | undefined] => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T>();


    useEffect(() => {
        const FetchAnimals = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data: T = await response.json();
                setData(data);
            }   catch (error) {
                console.error("Error fetching data:", error);
            }   finally {
                setLoading(false);
            }
        };
        if (data) return;

        FetchAnimals();
    });
    return [loading, data];
};