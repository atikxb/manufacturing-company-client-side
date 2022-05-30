import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(token);
    useEffect(() => {//send token to backend and verify to let user access
        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        const currentUser = { email: email, displayName: displayName };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })

        }
    }, [user]);
    return [token];
};

export default useToken;