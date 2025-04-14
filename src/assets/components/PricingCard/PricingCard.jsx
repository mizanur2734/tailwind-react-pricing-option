import React from "react";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  return (
    <div className="border bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-4xl">{pricing.name}</h1>
        <h4 className="text-2xl">{pricing.price}</h4>
      </div>
      {/* card body */}
      <div></div>
    </div>
  );
};

export default PricingCard;
