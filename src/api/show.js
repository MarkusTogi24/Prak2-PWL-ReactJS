import { useState, useEffect } from 'react';
import axios from "axios";

export default function Show(id){
    const [data, setData] = useState(null);
    const [comments, setComments] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const number = [{'title': 'Aku'},{'title': 'Kau'},{'title': 'Dia'}]

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://server-markustogi-app.herokuapp.com/api/post/'+id)
                .then ((response) => { 
                    if(!response.status===200){  
                        throw Error('terjadi masalah');
                    }
                    // console.log(response.data);
                    return response.data;
                })
                .then ((data) => { 
                    // console.log(data.post);
                    setData(data.post);
                    setComments(data.comments);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    setIsPending(false);
                    setError(error.message);
                })
        }, 1000);
    }, [id]);

    return { data, comments, isPending, error };
}