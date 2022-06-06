import { useEffect, useState } from "react";

const useSingleParts = id => {
    const [singleParts, setPart] = useState({});
    useEffect(()=> {
        fetch(`http://localhost:5000//parts/${id}`)
        .then(res => res.json())
        .then(data => setPart(data));
    }, [id]);
    return [singleParts];
};

export default useSingleParts;