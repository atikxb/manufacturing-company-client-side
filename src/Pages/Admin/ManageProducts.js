import React from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Loading/Loading';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {
    const [parts, isLoading, refetch] = useParts();
    if (isLoading) { return <Loading /> }
    return (
        <div className="container">
            <h1 className="text-center">Manage Parts</h1>
            <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
            <div className="row">
                <div className="order_table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Parts Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Minimum Quantity</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parts.map(singleParts => <SingleProduct  key={singleParts._id} singleParts={singleParts} refetch={refetch}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;