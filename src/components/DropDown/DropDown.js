import React from "react";
import "./DropDown.css";
import { Dropdown } from "antd";

function DropDown() {
  const items = [
    {
      key: "1",
      label: "0%",
    },
    {
      key: "2",
      label: "0.5%",
    },
    {
      key: "3",
      label: "1%",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <p
        href="/"
        onClick={(e) => e.preventDefault()}
        style={{ color: "black" }}
      >
        {/* <Space> */}
        Slippage⯆
        {/* </Space> */}
      </p>
    </Dropdown>
  );
}
export default DropDown;
