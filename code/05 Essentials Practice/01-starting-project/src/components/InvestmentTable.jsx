import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function InvestmentTable({ userInputs }) {

  const [datas, setData] = useState();
  
  const data = [
    {
      year: 2,
      investmentValue: 1000,
      interestYear: 1200,
      totalInterest: 6,
      investedCapital: 10,
    },
  ];

  const calc = calculateInvestmentResults(userInputs)

  console.log({calc})

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
