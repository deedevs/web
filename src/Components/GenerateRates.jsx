import React from "react";
const rates = [
  { "US Dollar": "$40" },
  { "Pound Sterling": "£63" },
  { Euro: "€50" },
];

const GenerateRates = () => {
  return (
    <p>
      {rates.map((rate) => {
        <span key={rate}>{[rate]}</span>;
      })}
    </p>
  );
};

export default GenerateRates;
