import React from "react";
import "./Header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiInboxIn } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <div className="left">
          <span>LeaderBoards</span>
        </div>
        <div className="right">
          <span className="right-notify">
            <IoMdNotificationsOutline size={25}/>
          </span>
          <span className="right-box">
            <CiInboxIn size={25}/>0
          </span>
          <span className="right-user">
            <FaUserTie size={25}/>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;
