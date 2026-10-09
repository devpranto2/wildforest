import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage =async () => {
    const res=await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log(destinations)
    return (
        <div>
            <h1>All Destinations</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    destinations.map(destination =>
                    <DestinationCard   destination={destination} key={destination._id}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;