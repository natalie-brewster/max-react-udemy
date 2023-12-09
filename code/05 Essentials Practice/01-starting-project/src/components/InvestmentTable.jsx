import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function InvestmentTable({ userInputs }) {

  const [calculations, setCalculations] = useState();
  const data = [
    {
      year: 1,
      investmentValue: 1000,
      interestYear: 1200,
      totalInterest: 4,
      investedCapital: 5,
    },
  ];
  return (
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
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.investmentValue}</td>
            <td>{row.interestYear}</td>
            <td>{row.totalInterest}</td>
            <td>{row.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
