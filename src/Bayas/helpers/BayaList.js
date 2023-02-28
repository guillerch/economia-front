import{ useState, useEffect } from 'react';

export const BayaList = () => {
    const [bayas, setBayas] = useState([]);

    useEffect(() => {
        const fetchBayas= async() => {
        const response = await fetch('https://pokeasistente.ga/baya/');
        const data = await response.json();
        setBayas(data);
        }

        fetchBayas();
    }, []);

    return {
        bayas
    }
}