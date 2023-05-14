import axios from 'axios';
import {useState, useEffect} from 'react'

export default function CSR(){
    const [data, setData] = useState ([]);
    const [loading, setLoading] = 
    useState(true);
    const [params,setParams] = useState ({
        page:1,
        limit:10
    });

    /* Digunakan untuk window onload */
    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts",
        {
            params: {
                ...params,
            }
        })
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setData([]);
            setLoading(false);
        })

       
    },[])

    return (
        <div>
        <h1 className='text-black'>Client side rendering</h1>
        <button onClick={() => setParams(1,5)}>Coba lagi</button>
        <div>{
        loading === true ? "Mulai" : "Selesai"        }
        <pre>{
        JSON.stringify(data,null,2)
        }
        </pre>
        </div>
       
        </div>
    )

}

