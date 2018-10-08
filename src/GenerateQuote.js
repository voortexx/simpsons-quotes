import React from "react";

const GenerateQuote = ({ selectQuote }) => {
  return (
    <div className="Generate Quote">
      <button onClick={selectQuote}>Get quote</button>
    </div>
  );
};

export default GenerateQuote;
