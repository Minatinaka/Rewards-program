// RewardpointsApp.js
import React, { useEffect, useState } from "react";
import './RewardpointsApp.css'

// Simulated API call to fetch transaction data
const fetchallTransactions = async () => {
  return [
    { TransactionId: 1, name: "Minati", date: "2024-09-25", amount: 120.50 },
    { TransactionId: 2, name: "John Doe", date: "2024-08-15", amount: 175.99 },
    { TransactionId: 3, name: "John Doe", date: "2024-06-15", amount: 75.99 },
    { TransactionId: 4, name: "John Doe", date: "2024-07-01", amount: 200.75 },
    { TransactionId: 5, name: "Minati", date: "2024-09-30", amount: 95.50 },
    { TransactionId: 6, name: "John Doe", date: "2024-09-01", amount: 210.25 },
    { TransactionId: 7, name: "Jane Smith", date: "2024-09-20", amount: 80.10 },
    { TransactionId: 8, name: "Chris Evans", date: "2024-09-10", amount: 130.99 },
    { TransactionId: 9, name: "Minati", date: "2024-09-12", amount: 140.75 },
    { TransactionId: 10, name: "John Doe", date: "2024-09-18", amount: 60.99 },
    { TransactionId: 11, name: "Jane Smith", date: "2024-09-05", amount: 170.30 },
    { TransactionId: 12, name: "Chris Evans", date: "2024-09-28", amount: 220.20 },
    { TransactionId: 13, name: "Minati", date: "2024-08-22", amount: 250.99 },
    { TransactionId: 14, name: "John Doe", date: "2024-08-30", amount: 150.65 },
    { TransactionId: 15, name: "Jane Smith", date: "2024-08-15", amount: 90.75 },
    { TransactionId: 16, name: "Chris Evans", date: "2024-08-25", amount: 180.40 },
    { TransactionId: 17, name: "Minati", date: "2024-07-11", amount: 120.30 },
    { TransactionId: 18, name: "John Doe", date: "2024-07-15", amount: 60.20 },
    { TransactionId: 19, name: "Jane Smith", date: "2024-07-19", amount: 220.99 },
    { TransactionId: 20, name: "Chris Evans", date: "2024-07-22", amount: 90.60 },
    { TransactionId: 21, name: "Minati", date: "2024-08-02", amount: 190.10 },
    { TransactionId: 22, name: "John Doe", date: "2024-08-12", amount: 99.75 },
    { TransactionId: 23, name: "Jane Smith", date: "2024-08-18", amount: 70.20 },
    { TransactionId: 24, name: "Chris Evans", date: "2024-08-07", amount: 220.60 },
    { TransactionId: 25, name: "Minati", date: "2024-07-27", amount: 110.55 },
    { TransactionId: 26, name: "John Doe", date: "2024-06-21", amount: 85.70 },
    { TransactionId: 27, name: "Jane Smith", date: "2024-07-12", amount: 175.99 },
    { TransactionId: 28, name: "Chris Evans", date: "2024-09-02", amount: 205.40 },
    { TransactionId: 29, name: "Minati", date: "2024-06-22", amount: 90.35 },
    { TransactionId: 30, name: "John Doe", date: "2024-06-25", amount: 105.50 },
    { TransactionId: 31, name: "Jane Smith", date: "2024-06-10", amount: 140.00 },
    { TransactionId: 32, name: "Chris Evans", date: "2024-06-15", amount: 160.10 },
    { TransactionId: 33, name: "Minati", date: "2024-07-01", amount: 135.80 },
    { TransactionId: 34, name: "John Doe", date: "2024-07-10", amount: 115.95 },
    { TransactionId: 35, name: "Minati", date: "2024-05-25", amount: 120.30 },
    { TransactionId: 36, name: "John Doe", date: "2024-05-10", amount: 190.55 },
    { TransactionId: 37, name: "Jane Smith", date: "2024-05-15", amount: 210.75 },
    { TransactionId: 38, name: "Chris Evans", date: "2024-05-20", amount: 135.99 },
    { TransactionId: 39, name: "Minati", date: "2024-04-28", amount: 100.25 },
    { TransactionId: 40, name: "John Doe", date: "2024-04-18", amount: 180.50 },
    { TransactionId: 41, name: "Jane Smith", date: "2024-04-12", amount: 150.10 },
    { TransactionId: 42, name: "Chris Evans", date: "2024-04-25", amount: 190.20 },
    { TransactionId: 43, name: "Minati", date: "2024-03-15", amount: 220.70 },
    { TransactionId: 44, name: "John Doe", date: "2024-03-28", amount: 125.50 },
    { TransactionId: 45, name: "Jane Smith", date: "2024-03-10", amount: 175.30 },
    { TransactionId: 46, name: "Chris Evans", date: "2024-03-18", amount: 205.40 },
    { TransactionId: 47, name: "Minati", date: "2024-02-05", amount: 135.45 },
    { TransactionId: 48, name: "John Doe", date: "2024-02-17", amount: 195.80 },
    { TransactionId: 49, name: "Jane Smith", date: "2024-02-22", amount: 120.60 },
    { TransactionId: 50, name: "Chris Evans", date: "2024-02-28", amount: 160.75 },
    { TransactionId: 51, name: "Minati", date: "2024-01-20", amount: 210.50 },
    { TransactionId: 52, name: "John Doe", date: "2024-01-30", amount: 220.15 },
    { TransactionId: 53, name: "Jane Smith", date: "2024-01-25", amount: 140.50 },
    { TransactionId: 54, name: "Chris Evans", date: "2024-01-12", amount: 185.60 },
  ];
};

// Helper function to calculate reward points based on transaction amount
const calculatePoints = (amount) => {
    let points = 0;
  
    if (amount > 100) {
      points += (amount - 100) * 2;
      amount = 100;
    }
  
    if (amount > 50) {
      points += amount - 50;
    }
  
    return points;
  };
  
  // Helper function to check if a date is within the last 3 months
  const isWithinLastThreeMonths = (date) => {
    const currentDate = new Date();
    const transactionDate = new Date(date);
  
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
  
    return transactionDate >= threeMonthsAgo && transactionDate <= currentDate;
  };
  
  // Group transactions by customer and by month/year
  const groupTransactionsByCustomer = (transactions) => {
    const result = {};
  
    transactions.forEach((transaction) => {
      const { name, date, amount } = transaction;
      const transactionDate = new Date(date);
      const monthYear = transactionDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
  
      if (!result[name]) {
        result[name] = {
          monthlyPoints: {},
          totalPoints: 0,
          lastThreeMonthsPoints: 0,  // For points in the last 3 months
        };
      }
  
      if (!result[name].monthlyPoints[monthYear]) {
        result[name].monthlyPoints[monthYear] = 0;
      }
  
      const points = calculatePoints(amount);
  
      result[name].monthlyPoints[monthYear] += points;
      result[name].totalPoints += points;
  
      // Add points to last 3 months if the transaction is within that period
      if (isWithinLastThreeMonths(date)) {
        result[name].lastThreeMonthsPoints += points;
      }
    });
  
    return result;
  };
  
  // Main component
  const RewardpointsApp = () => {
    const [rewardPoints, setRewardPoints] = useState({});
  
    useEffect(() => {
      const fetchTransactions = async () => {
        const transactions = await fetchallTransactions();
        const groupedPoints = groupTransactionsByCustomer(transactions);
        setRewardPoints(groupedPoints);
      };
  
      fetchTransactions();
    }, []);
  
    return (
      <div className="reward-points">
        <h1>Reward Points Summary</h1>
        <div className="reward-details">
          {Object.entries(rewardPoints).map(([customerName, data]) => {
            const lastThreeMonthsPoints = Object.entries(data.monthlyPoints)
              .filter(([monthYear]) => {
                const [month, year] = monthYear.split(" ");
                const transactionDate = new Date(`${month} 1, ${year}`);
                return isWithinLastThreeMonths(transactionDate);
              })
              .map(([monthYear, points]) => (
                <li key={monthYear}>
                  {monthYear}: {points} points
                </li>
              ));
  
            return (
              <div key={customerName} className="customer-reward">
                <h2>{customerName}</h2>
                <h3>Total Points (Last 3 Months): {data.lastThreeMonthsPoints}</h3>
                <h4>Monthly Breakdown (Last 3 Months):</h4>
                <ul>
                  {lastThreeMonthsPoints}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default RewardpointsApp;
