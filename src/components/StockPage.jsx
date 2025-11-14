import React, { useState } from 'react';
import StockPrice from './StockPrice';

const StockPage = () => {
  const [currentPrice, setCurrentPrice] = useState(31.00);
  const [buyPrice] = useState(30.00);

  const oneDay = [
    [1730800000000, 30.95],
    [1730800600000, 31.10],
    [1730801200000, 31.20],
  ];

  const oneWeek = [
    [1730200000000, 30.5],
    [1730286400000, 31.0],
    [1730372800000, 31.2],
    [1730459200000, 31.8],
    [1730545600000, 32.1],
  ];

  const oneMonth = [
    [1728200000000, 28.5],
    [1728794800000, 29.2],
    [1729390000000, 30.0],
    [1729985200000, 31.3],
    [1730580400000, 32.0],
  ];

  const [dates, setDates] = useState(oneDay);

  const profitPercent = (((currentPrice - buyPrice) / buyPrice) * 100).toFixed(2);
  const isProfit = currentPrice >= buyPrice;

  return (
    <div className="px-4 py-4 mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] dark:text-white text-black sm:text-xl font-bold mb-6">XYZ Motors Stock</h2>
        <div className="flex gap-1 mb-4">
          <button className="px-2 py-2 text-sm bg-purple-700 text-white rounded" onClick={() => setDates(oneDay)}>1D</button>
          <button className="px-2 py-2 text-sm bg-purple-700 text-white rounded" onClick={() => setDates(oneWeek)}>1W</button>
          <button className="px-2 py-2 text-sm bg-purple-700 text-white rounded" onClick={() => setDates(oneMonth)}>1M</button>
        </div>
      </div>
      {/* Live Price Section */}
      <div className="flex flex-col-reverse sm:flex-row w-full gap-4 justify-between sm:items-center  mb-6 bg-[#f5f5f5] dark:bg-[#292e32] px-4 py-4 rounded-md shadow">
        <div className="flex items-start sm:flex-row flex-row justify-start w-full gap-2">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Current Price</p>
            <h3 className="sm:text-3xl text-xl  font-semibold dark:text-white text-gray-800">
              ${currentPrice.toFixed(2)}
            </h3>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">Change</p>
            <h3
              className={`sm:text-2xl text-xl font-bold ${isProfit ? 'text-green-600' : 'text-red-600'
                }`}
            >
              {isProfit ? '+' : ''}
              {profitPercent}% {isProfit ? '↑' : '↓'}
            </h3>
          </div>
        </div>
        <div className="gap-2 flex items-center justify-end w-full flex-wrap">
          <button className="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Buy
          </button>
          <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Sell
          </button>
        </div>
      </div>
      <StockPrice onPriceChange={setCurrentPrice} />
    </div>
  );
};

export default StockPage;
