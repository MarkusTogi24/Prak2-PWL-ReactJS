import { useState, useEffect } from 'react';
import axios from "axios";

export default function Index(){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const number = [{'title': 'Aku'},{'title': 'Kau'},{'title': 'Dia'}]

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://server-markustogi-app.herokuapp.com/api/posts')
                .then ((response) => { 
                    if(!response.status===200){  
                        throw Error('terjadi masalah');
                    }
                    // console.log(response);
                    return response.data.data; 
                    // console.log(response);
                })
                .then ((data) => { 
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    setIsPending(false);
                    setError(error.message);
                })
        }, 1000);
    }, []);

    return { data, isPending, error };
}