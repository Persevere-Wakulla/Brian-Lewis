import { useState } from "react";

const useLocalStorage = (key,initialVaule)=>{
    const [storedValue,setStoredValue] = useState(()=>{
        if(typeof window === 'undefined'){
            return initialVaule
        }
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item):initialVaule
        } catch (error) {
            console.log(error);
            return initialVaule            
        }
    });
    
    const setValue = (value) =>{
        try {
            setStoredValue(value);
            if(typeof window !== 'undefined'){
                localStorage.setItem(key,JSON.stringify(value));
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return [storedValue,setValue];
}

export default useLocalStorage;