import React from "react";
import "./LeaderBoard.css";
import Table from "../Table/Table";
import DropDown from "../DropDown/DropDown";

function LeaderBoard() {
  let heading = [
    "Rank",
    "Name",
    "Calmar Ratio",
    "Overall Profit",
    "Avg. Daily Profit",
    " Win %(Day)",
    "Price (Rs)",
    "Action",
  ];
  let body = [
    [
      "1",
      "Selling with re entr",
      "⯅3.96",
      "381845",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    ["2", " strategy_name", "⯅2.96", "123445", "319.54", "0.65", "	500", "Buy"],
    [
      "3",
      "Selling with re entr",
      "⯅3.6",
      "456675",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    [
      "4",
      " Wait and trade_Save",
      "⯅3.9",
      "323451",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    [
      "5",
      "Selling with re entr",
      "⯅1.96",
      "381845",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    [
      "6",
      "Selling with re entr",
      "⯅3.96",
      "143845",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    [
      "7",
      "Selling with re entr",
      "⯅1.9",
      "341845",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    ["8", " strategy_name", "⯅3.96", "234465", "319.54", "0.65", "	-", "View"],
    [
      "9",
      "Selling with re entr",
      "⯅1.6",
      "381845",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
    [
      "10",
      " Based on premium and",
      "⯅3.96",
      "345675",
      "319.54",
      "0.65",
      "	-",
      "View",
    ],
  ];
  return (
    <section className="l-wrapper">
      <div className="l-container">
        <div className="heading">
          <span>Basic Backtest</span>
          <span className="dropdown"><DropDown/></span>
        </div>
        <Table heading={heading} body={body} />
      </div>
    </section>
  );
}

export default LeaderBoard;
