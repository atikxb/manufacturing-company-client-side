import { useQuery } from "react-query";

const useParts = () => {
    const { isLoading, refetch, data: parts } = useQuery('parts', () =>
        fetch(`http://localhost:5000//parts`)
            .then(res => res.json())
    );
    return [parts, isLoading, refetch];
};

export default useParts;