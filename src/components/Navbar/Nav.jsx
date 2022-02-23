import React from "react";
import "./style.css";
import { Button } from "antd";

export default function NavigationBar({
  Title,
  FirstBtnColor,
  SecondBtnColor,
  BtnWidth,
  FirstBtnValue,
  SecondBtnValue,
  handleLogin,
}) {
  const FirstBtn = {
    width: `${BtnWidth}rem`,
    backgroundColor: FirstBtnColor,
  };
  const SecondBtn = {
    width: `${BtnWidth}rem`,
    backgroundColor: SecondBtnColor,
  };

  return (
    <>
      <div className="Navbar">
        <h1 className="Logo">{Title}</h1>

        <Button className="Btn" onClick={handleLogin} style={SecondBtn}>
          {SecondBtnValue}
        </Button>

        <Button className="Btn" style={FirstBtn}>
          {FirstBtnValue}
        </Button>
      </div>
    </>
  );
}
