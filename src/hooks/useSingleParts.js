import { useEffect, useState } from "react";

const useSingleParts = id => {
    const [singleParts, setPart] = useState({});
    useEffect(()=> {
        fetch(`https://afternoon-savannah-56970.herokuapp.com/parts/${id}`)
        .then(res => res.json())
        .then(data => setPart(data));
    }, [id]);
    return [singleParts];
};

export default useSingleParts;