import React from "react";

const CustomTable: React.FC = () => {
  const columns = ["Name", "Age", "Country"];
  const data = [
    { Name: "Alice", Age: 25, Country: "USA" },
    { Name: "Bob", Age: 30, Country: "UK" },
    { Name: "Charlie", Age: 28, Country: "Canada" },
  ];

  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.Name}</td>
            <td>{row.Age}</td>
            <td>{row.Country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
