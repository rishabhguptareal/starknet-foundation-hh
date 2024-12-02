import React, { useState, useEffect } from 'react';

const BasketList = () => {
  const [baskets, setBaskets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBaskets = async () => {
      try {
        const response = await fetch('https://starkbasket.humaads.live/baskets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBaskets(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBaskets();
  }, []);

  if (isLoading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-4 p-4 bg-space-black/50 backdrop-blur-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-cosmic text-transparent bg-clip-text">Basket List</h1>
      {baskets.map((basket) => (
        <div key={basket._id} className="border rounded-lg p-4 shadow-md bg-white/10 backdrop-blur-lg">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-white">{basket.name} ({basket.symbol})</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div>
              <p className="font-bold">Basket Address:</p>
              <p className="truncate text-sm">{basket.basket}</p>
            </div>
            <div>
              <p className="font-bold">Tokens:</p>
              {basket.tokens.map((token, index) => (
                <p key={token} className="truncate text-sm">
                  {index + 1}. {token}
                </p>
              ))}
            </div>
            <div>
              <p className="font-bold">Weights:</p>
              {basket.weights.map((weight, index) => (
                <p key={index} className="text-sm">Token {index + 1}: {weight}%</p>
              ))}
            </div>
            <div>
              <p className="font-bold">Whitelisted:</p>
              {basket.whitelisted.map((address) => (
                <p key={address} className="truncate text-sm">{address}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasketList;