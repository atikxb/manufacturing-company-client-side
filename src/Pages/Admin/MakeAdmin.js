import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const MakeAdmin = () => {
    const { isLoading, refetch, data: users } = useQuery('users', () =>
        fetch(`https://afternoon-savannah-56970.herokuapp.com/users`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    );
    const makeAdmin = email => {
        fetch(`https://afternoon-savannah-56970.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    console.log('You are not admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Successfully updated");
                    refetch();

                }
            });

    }
    if (isLoading) { return <Loading /> }
    return (
        <div className='container py-5'>
            <h1 className="text-center">All Users</h1>
            <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
            <div class="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => user?.role !== 'admin' && <tr key={user._id}><td>{index + 1}</td><td>{user.displayName}</td><td>{user.email}</td><td><button onClick={() => makeAdmin(user.email)} className='btn btn-sm btn-success'>Make Admin</button></td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
