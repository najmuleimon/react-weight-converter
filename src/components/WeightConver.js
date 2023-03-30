import React, { useState } from 'react';
import WeightInput from './WeightInput';

function Test() {
  const [kg, setKg] = useState('');
  const [lbs, setLbs] = useState('');
  const [gram, setGram] = useState('');

  function handleKgChange(event) {
    const value = event.target.value;
    setKg(value);

    const pounds = value * 2.20462;
    setLbs(pounds.toFixed(2));
    const grams = value * 1000;
    setGram(grams.toFixed(2))
  }

  function handleLbsChange(event) {
    const value = event.target.value;
    setLbs(value);

    const kilograms = value / 2.20462;
    setKg(kilograms.toFixed(2));
    const grams = value * 453.592;
    setGram(grams.toFixed(2))
  }

  function handleGramChange(event) {
    const value = event.target.value;
    setGram(value);

    const kilograms = value / 1000;
    setKg(kilograms.toFixed(2));
    const pounds = value * 0.00220462;
    setLbs(pounds.toFixed(2));
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Weight Converter</h1>
      <WeightInput weight={kg} handleChange={handleKgChange} title="Kilograms"/>
      <WeightInput weight={lbs} handleChange={handleLbsChange} title="Pounds"/>
      <WeightInput weight={gram} handleChange={handleGramChange} title="Grams"/>

      {kg && (
        <p className="text-lg font-bold mb-4">
          {kg} kilograms is equal to {lbs} pounds and {gram} grams
        </p>
      )}
      {lbs && (
        <p className="text-lg font-bold mb-4">
          {lbs} pounds is equal to {kg} kilograms and {gram} grams
        </p>
      )}
      {gram && (
        <p className="text-lg font-bold mb-4">
          {gram} grams is equal to {kg} kilograms and {lbs} pounds
        </p>
      )}
    </div>
  );
}

export default Test;