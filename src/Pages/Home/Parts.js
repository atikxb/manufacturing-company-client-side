import React from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Loading/Loading';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, isLoading] = useParts();
    if (isLoading) { return <Loading /> }
    return (
        <section id='parts' className="py-5">
            <div className="container">
                <h1 className="text-center">Computer Parts</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div className="row">
                    {
                        parts.map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Parts;