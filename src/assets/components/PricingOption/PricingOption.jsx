import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);
  return (
    <div>
      <h2 className="text-4xl">Get our Membership</h2>
      <div className="grid">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
