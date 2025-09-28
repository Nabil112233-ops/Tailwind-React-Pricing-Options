import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features, id} = pricing;
    return (
        <div className='flex flex-col border bg-blue-300 rounded-2xl p-4'>
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-4xl'>{price}</h4>
            </div>
            <div className='mt-5 bg-blue-400 rounded-2xl p-3 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-3.5">Subscribe</button>
        </div>
    );
};

export default PricingCard;