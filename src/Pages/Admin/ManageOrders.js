import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const { isLoading, refetch, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/all-orders`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );
    console.log(orders);
    if (isLoading) { return <Loading /> }

    return (
        <div className="container">
            <h1 className="text-center">Manage Orders</h1>
            <hr style={{ width: '100px', margin: '0px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
            <div className="row">
                <div className="order_table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Parts Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow  key={order._id} order={order} index={index} refetch={refetch}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;