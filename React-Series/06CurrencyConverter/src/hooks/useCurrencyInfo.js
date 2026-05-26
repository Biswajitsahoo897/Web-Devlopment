import {useState, useEffect} from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({});
    try{
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)        
            .then((res) => res.json())
            .then((res) => setData(res[currency]));

        }, [currency]); // only currency as dependency
    }catch(err){
        console.log(err);
    }
    return data;
}

export default useCurrencyInfo;