import React from "react";
import "./SideNavbar.css";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { TbAlertSquareFilled } from "react-icons/tb";
import { FaNoteSticky } from "react-icons/fa6";
import { SiVitest } from "react-icons/si";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

function SideNavbar() {
  return (
    <section className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img src="./unfluke-logo.png" alt="" width={40} />
            unfluke
          </a>
        </div>
        <div className="nav-links">
          <div className="nav-leaderboard">
            {/* <RxDashboard className="dash-icon"/> */}
            <MdDashboardCustomize size={20} />
            <a href="/"> LeaderBoard</a>
          </div>
          <div>
            <RiStockFill size={20} />
            <a href="/"> Historical Trading</a>
          </div>
          <div>
            <FaChartLine />
            <a href="/"> Historical Chart</a>
          </div>
          <div>
            <MdOutlineDocumentScanner />
            <a href="/"> Scanners</a>
          </div>
          <div>
            <TbAlertSquareFilled />

            <a href="/"> Alerts</a>
          </div>
          <div>
            <FaNoteSticky />

            <a href="/"> Basic Backtest</a>
          </div>
          <div>
          <SiVitest />

            <a href="/"> Advanced Backtest</a>
          </div>
          <div>
          <MdOutlinePriceCheck />
            <a href="/"> Pricing</a>
          </div>
          <div>
          <GiTakeMyMoney />
            <a href="/"> My Earnings</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideNavbar;
