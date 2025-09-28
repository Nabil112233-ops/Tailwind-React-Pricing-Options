import React, { use } from 'react';
import PricingCard from '../Pricing Card/PricingCard';
import DaisyCard from '../Daisy Card/DaisyCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-7 m-5'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;