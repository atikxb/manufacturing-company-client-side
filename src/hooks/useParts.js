import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=> {
        fetch('https://afternoon-savannah-56970.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setParts(data));
    }, []);
    return [parts];
};

export default useParts;