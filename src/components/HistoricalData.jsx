import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const HistoricalData = ({ token }) => {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchHistoricalData = async () => {
    const response = await axios.get(`https://api.example.com/historical/${token}?start=${startDate}&end=${endDate}`);
    setData({
      labels: response.data.dates,
      datasets: [
        {
          label: 'Balance',
          data: response.data.balances,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }
      ]
    });
  };

  useEffect(() => {
    if (startDate && endDate) {
      fetchHistoricalData();
    }
  }, [startDate, endDate]);

  return (
    <div>
      <h3>Historical Data</h3>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      {data.labels && <Line data={data} />}
    </div>
  );
};

export default HistoricalData;
