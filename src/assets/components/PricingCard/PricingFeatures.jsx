import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature }) => {
  return (
    <div>
      <p className="flex mt-2">
        <CircleCheckBig className="pr-2 text-green-500"></CircleCheckBig>{" "}
        {feature}
      </p>
    </div>
  );
};

export default PricingFeatures;
