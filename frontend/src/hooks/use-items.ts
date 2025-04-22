import { useEffect, useState } from "react"
import { Items } from "../types/global"

function useTopItems() {
    const [topItems, setTopItems] = useState<Items[]>([]);
    useEffect(()=> {
        
    }, []);
    return topItems;
}