import { useState, useEffect } from 'react';

export const useFetch = (url) => {
     let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     useEffect(() => {
          fetch(url,{
               headers: {
                    'Authorization': `Basic ${auth}`
               }
          })
               .then((resp) => {
                    if (!resp) {
                         throw Error('could not fetch data from source');
                    }

                    return resp.json();
               })
               .then((data) => {
                    setData(data);
                    setLoading(false);
                    setError(null);
               })
               .catch((err) => {
                    setLoading(false);
                    setError(err.message);
               });
     }, []);
     return { data, loading, error };
};
