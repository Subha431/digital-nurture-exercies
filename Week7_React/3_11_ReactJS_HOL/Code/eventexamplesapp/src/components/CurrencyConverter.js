import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const conversionRate = 0.0101; // The current rate is taken for this. It is, 1 Euro = 101 inr
    const result = inr * conversionRate;
    
    if (!isNaN(result)) {
      setEuros(result.toFixed(2));
    } else {
      setEuros('Invalid input');
    }
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <input type="number" value={inr}
        onChange={(e) => setInr(e.target.value)}
        placeholder="Enter Indian Rupees"
      />
      <button onClick={handleSubmit}>Convert to Euro</button>
      <p>In Euro: {euros}</p>
    </div>
  );
};

export default CurrencyConvertor;
