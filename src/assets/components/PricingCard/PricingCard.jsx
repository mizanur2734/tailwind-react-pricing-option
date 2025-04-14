import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col border bg-amber-600 rounded-2xl p-4 text-white">
      {/* card header */}
      <div>
        <h2 className="text-5xl">{name}</h2>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* card body */}
      <div className="bg-amber-400 p-2 rounded-2xl mt-8 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4 hover:bg-amber-400">Subscribe</button>
    </div>
  );
};

export default PricingCard;
