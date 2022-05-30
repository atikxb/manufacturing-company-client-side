import React from 'react';
import useParts from '../../hooks/useParts';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts] = useParts();
    return (
        <section id='parts' class="py-5">
            <div class="container">
                <h1 class="text-center">Computer Parts</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div class="row">
                    {
                        parts.map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Parts;