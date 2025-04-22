import { useEffect, useState } from "react"
import { Items } from "../types/global"
import axios from 'axios';

function useTopItems() {
    const [topItems, setTopItems] = useState<Items[]>([]);
    useEffect( ()=> {
        const fetchData = async () => {
            try {
                const res = await axios.get<Items[]>("/top-items");
                setTopItems(res.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, []);
    return topItems;
}