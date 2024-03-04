import React from "react";

import { formatter, calculateInvestmentResults } from "../util/investment";

function ResultsList({ annualData }) {
  if (annualData.duration < 1)
    return <p className="center">The minimum duration is 1!</p>;
  const results = calculateInvestmentResults(annualData);
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
            return (
              <tr>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default ResultsList;
