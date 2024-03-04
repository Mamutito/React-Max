import React from "react";

import { formatter, calculateInvestmentResults } from "../util/investment";

function ResultsList({ input }) {
  const results = calculateInvestmentResults(input);
  let totalInterest = 0;
  return (
    <section id="results">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ year, valueEndOfYear, interest }) => {
            totalInterest += interest;
            const totalAmountInvested = valueEndOfYear - totalInterest;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default ResultsList;
