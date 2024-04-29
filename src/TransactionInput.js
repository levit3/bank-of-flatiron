import React, { useState } from "react";
import DisplayData from "./DisplayData";
import "./styles.css";

function TransactionInput() {
  const [input, setInput] = useState({
    id: 8,
    date: "",
    description: "",
    category: "",
    amount: "",
    dataArray: [
      {
        id: 0,
        date: "2024-02-01",
        description: "Paycheck from Bobs BUrger",
        category: "Income",
        amount: "20000",
      },
      {
        id: 1,
        date: "2024-02-01",
        description: "Breakfast at Art Cafe",
        category: "Food",
        amount: "-2500",
      },
      {
        id: 2,
        date: "2024-02-02",
        description: "Movies",
        category: "Entertainment",
        amount: "-700",
      },
      {
        id: 3,
        date: "2024-02-03",
        description: "Clothes",
        category: "Clothes",
        amount: "-1000",
      },
      {
        id: 4,
        date: "2024-02-05",
        description: "Groceries",
        category: "Groceries",
        amount: "-200",
      },
      {
        id: 5,
        date: "2024-02-06",
        description: "Utensils",
        category: "Home Appliances",
        amount: "-700",
      },
      {
        id: 6,
        date: "2024-02-07",
        description: "Medicine",
        category: "Health",
        amount: "-400",
      },
      {
        id: 7,
        date: "2024-02-09",
        description: "Pay from Side Hustle",
        category: "Income",
        amount: "9000",
      },
    ],
  });
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    const key = event.target.id;
    setInput({ ...input, [key]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      input.date.trim() !== "" ||
      input.description.trim() !== "" ||
      input.category.trim() !== "" ||
      input.amount.trim() !== ""
    ) {
      const data = {
        id: input.id,
        date: input.date,
        description: input.description,
        category: input.category,
        amount: input.amount,
      };
      setInput((prevInput) => ({
        date: "",
        description: "",
        category: "",
        amount: "",
        id: prevInput.id + 1,
        dataArray: [...input.dataArray, data],
      }));
    } else {
      alert("Please fill out all fields");
    }
  }
  const handleSearch = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const results = input.dataArray.filter((data) => {
    return (
      data.description.toLowerCase().includes(searchInput) ||
      data.category.toLowerCase().includes(searchInput) ||
      data.date.toLowerCase().includes(searchInput) ||
      data.amount.toString().includes(searchInput)
    );
  });

  return (
    <div>
      <div>
        <form>
          <input
            id="search"
            type="text"
            placeholder="Search your recent transactions..."
            value={searchInput}
            onChange={handleSearch}
          ></input>
        </form>
      </div>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <input
            id="date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={input.date}
            onChange={handleChange}
          />
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={input.description}
            onChange={handleChange}
          />
          <input
            id="category"
            type="text"
            placeholder="Category"
            value={input.category}
            onChange={handleChange}
          />
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            value={input.amount}
            onChange={handleChange}
          />
          <div>
            <button type="submit">Add Transaction</button>
          </div>
        </form>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {searchInput ? (
          <DisplayData dataArray={results} />
        ) : (
          <DisplayData dataArray={input.dataArray} />
        )}
      </table>
    </div>
  );
}

export default TransactionInput;
