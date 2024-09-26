# Rewards-program
# Customer Rewards Program

This React application simulates a customer rewards program for a retailer, where points are awarded based on recorded transactions. The app fetches mock transaction data, calculates rewards points for each customer based on purchase amounts, and displays the total points earned per month and overall.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution Approach](#solution-approach)
- [Setup Instructions](#setup-instructions)
- [Points Calculation Logic](#points-calculation-logic)

---

## Problem Statement

The program aims to calculate and display customer reward points based on the following rules:
- Customers earn **2 points** for every dollar spent over $100.
- Customers earn **1 point** for every dollar spent between $50 and $100.
- Cents should be considered while calculating the points.
- Transactions are grouped by both **month** and **year**, and the points are displayed accordingly.

## Solution Approach

### Step 1: Simulate an Asynchronous API Call
- The `fetchallTransactions` function simulates an asynchronous API call to fetch mock transaction data, which includes customer IDs, names, dates, and purchase amounts.

### Step 2: Calculate Points for Each Transaction
- The `calculatePoints` function implements the points calculation logic:
  - If a transaction amount is greater than $100, 2 points are awarded for each dollar above $100.
  - If a transaction amount is between $50 and $100, 1 point is awarded for each dollar.
  - Cents are included in the calculation for accurate point values.

### Step 3: Group Transactions by Customer and Month/Year
- The `groupTransactionsByCustomer` function groups transactions by customer and then by month/year. This ensures that points are accumulated and displayed per month/year, and the total points are also calculated.

### Step 4: Handle Error States
- The program includes basic error handling. If the transaction data fails to load, an appropriate error message is displayed to the user.

### Step 5: React Component Rendering
- The main `RewardpointsApp` component renders the rewards data for each customer, displaying both the monthly breakdown of points and the total points earned.

### Step 6: Handle Dates Properly
- The `Date` object is used to handle date manipulations, ensuring that month and year are properly considered when grouping transactions.

---

## Setup Instructions

To run the project locally, follow these steps:

1. **Clone the repository**:
   git clone https://github.com/Minatinaka/Rewards-program.git
   
2. **Navigate to the project directory:**:

    cd Rewards-program

3. **Install dependencie**:
    npm install

4. **Run the application**:
    npm start

