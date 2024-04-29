import React from "react";
import "./styles.css";
function DisplayData({ dataArray }) {
  const data = dataArray.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.date}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.amount}</td>
      </tr>
    );
  });

  return <>{data}</>;
}

export default DisplayData;
