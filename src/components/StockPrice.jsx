import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const StockPrice = ({ onPriceChange, buyPrice }) => {
  const [data, setData] = useState([
    [Date.now(), 30.95],
    [Date.now() + 60000, 31.34],
    [Date.now() + 120000, 31.18],
  ]);

  const [currentPrice, setCurrentPrice] = useState(31.18);

  // 🔄 Update data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const lastTime = prev[prev.length - 1][0];
        const newTime = lastTime + 60000; // +1 minute
        const lastValue = prev[prev.length - 1][1];
        const randomChange = (Math.random() - 0.5) * 0.5; // -0.25 to +0.25
        const newValue = parseFloat((lastValue + randomChange).toFixed(2));
        const newData = [...prev.slice(-20), [newTime, newValue]];
        setCurrentPrice(newValue);
        onPriceChange(newValue);
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [onPriceChange]);

  const isProfit = currentPrice >= buyPrice;
  const areaColor = isProfit ? '#7B1FA2' : '#7B1FA2'; // green or red

  const chartOptions = {
    chart: {
      type: 'area',
      height: 350,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: { speed: 1000 },
      },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: [areaColor],
    },
    xaxis: { type: 'datetime' },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(2),
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        gradientToColors: [areaColor],
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    colors: [areaColor],
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'XYZ Motors', data }]}
        type="area"
        height={200}
      />
    </div>
  );
};

export default StockPrice;
