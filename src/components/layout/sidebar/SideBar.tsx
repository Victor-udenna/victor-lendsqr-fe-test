import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SideBarStyle.scss";
import briefcaseIcon from "../../../assets/images/briefcase 1.svg";
import Button from "../../ui/Button/Button";
import arrowdown from "../../../assets/images/arrow-down.svg";
import homeIcon from "../../../assets/images/home.svg";
import userIcon from "../../../assets/images/user-friends.svg";
import userGroup from "../../../assets/images/users-group.svg";
import loanImg from "../../../assets/images/loan.svg";
import handshakeImg from "../../../assets/images/handshake-regular.svg";
import savingimg from "../../../assets/images/piggy-bank.svg";
import loanrequestImg from "../../../assets/images/loanrequest.svg";
import userCheckImg from "../../../assets/images/user-check 1.svg";
import karmaimg from "../../../assets/images/user-times.svg";
import savingImg from "../../../assets/images/saving-product.svg";
import feecharge from "../../../assets/images/fee-charge.svg";
import transactionImg from "../../../assets/images/transaction.svg";
import galaxyimg from "../../../assets/images/galaxy 1.svg";
import usercog from "../../../assets/images/user-cog 1.svg";
import statmentimg from "../../../assets/images/scroll 1.svg";
import chartimg from "../../../assets/images/chart-bar 2.svg";
import prefrencImg from "../../../assets/images/sliders-h 1.svg";
import feesimg from "../../../assets/images/badge-percent 1.svg";
import auditImg from "../../../assets/images/clipboard-list 1.svg";
import tireimg from "../../../assets/images/tire 1.svg";
import logoutimg from "../../../assets/images/sign-out 1.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useSidebar } from "../../../providers/useSideBar";
import listicon from "../../../assets/images/list.svg";
import lisopenIcon from "../../../assets/images/list-nested.svg";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  const handleMenuClick = (path: string) => {
    setActiveMenu(path);
    navigate(path);
    if (window.innerWidth < 576) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  return (
    isSidebarOpen && (
      <motion.nav
        className="sidebar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="sidebar__toggle-button">
          <img width={16} height={16} alt="organization icon" src={briefcaseIcon} />
          <span>{"Switch Organization"}</span>
          <img width={6.75} height={13.21} alt="arrow icon" src={arrowdown} />
        </div>

        <div
          role="button"
          tabIndex={1}
          className={`sidebar__menu ${activeMenu === "/dashboard" ? "active" : ""}`}
          onClick={() => handleMenuClick("/dashboard")}
        >
          <img width={16} height={16} alt="home icon" src={homeIcon} />
          <span>{"Dashboard"}</span>
        </div>

        <div className="sidebar-menu-container">
          <span className="sidebar__menu--header">{"CUSTOMERS"}</span>

          <div
            className={`sidebar__menu ${activeMenu === "/users" ? "active" : ""}`}
            onClick={() => handleMenuClick("/users")}
          >
            <img width={16} height={12.8} alt="users icon" src={userIcon} />
            <span>{"Users"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/guarantors" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/guarantors")}
          >
            <img width={16} height={12.8} alt="guarantors icon" src={userGroup} />
            <span>{"Guarantors"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/loan" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/loan")}
          >
            <img width={16} height={12.8} alt="loan icon" src={loanImg} />
            <span>{"Loans"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/decision-models" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/decision-models")}
          >
            <img width={16} height={12.8} alt="handshake icon" src={handshakeImg} />
            <span>{"Decision Models"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/savings" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/savings")}
          >
            <img width={16} height={12.8} alt="savings icon" src={savingimg} />
            <span>{"Savings"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/loan-requests" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/loan-requests")}
          >
            <img width={16} height={12.8} alt="loan request icon" src={loanrequestImg} />
            <span>{"Loan Requests"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/whitelist" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/whitelist")}
          >
            <img width={16} height={12.8} alt="user check icon" src={userCheckImg} />
            <span>{"Whitelist"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/karma" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/karma")}
          >
            <img width={16} height={12.8} alt="karma icon" src={karmaimg} />
            <span>{"Karma"}</span>
          </div>
        </div>

        <div className="sidebar-menu-container">
          <span className="sidebar__menu--header">{"BUSINESSES"}</span>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/organization" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/organization")}
          >
            <img width={16} height={12.8} alt="organization icon" src={briefcaseIcon} />
            <span>{"Organization"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/loan-products" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/loan-products")}
          >
            <img width={16} height={12.8} alt="loan products icon" src={loanrequestImg} />
            <span>{"Loan Products"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/savings-products" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/savings-products")}
          >
            <img width={16} height={12.8} alt="savings products icon" src={savingImg} />
            <span>{"Savings Products"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/fees-and-charges" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/fees-and-charges")}
          >
            <img width={16} height={12.8} alt="fees and charges icon" src={feecharge} />
            <span>{"Fees and Charges"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/transactions" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/transactions")}
          >
            <img width={16} height={12.8} alt="transactions icon" src={transactionImg} />
            <span>{"Transactions"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/services" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/services")}
          >
            <img width={16} height={12.8} alt="services icon" src={galaxyimg} />
            <span>{"Services"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/service-account" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/service-account")}
          >
            <img width={16} height={12.8} alt="service account icon" src={usercog} />
            <span>{"Service Account"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/settlements" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/settlements")}
          >
            <img width={16} height={12.8} alt="settlements icon" src={statmentimg} />
            <span>{"Settlements"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/reports" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/reports")}
          >
            <img width={16} height={12.8} alt="reports icon" src={chartimg} />
            <span>{"Reports"}</span>
          </div>
        </div>

        <div className="sidebar-menu-container">
          <span className="sidebar__menu--header">{"SETTINGS"}</span>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/preferences" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/preferences")}
          >
            <img width={16} height={12.8} alt="preferences icon" src={prefrencImg} />
            <span>{"Preferences"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/fees-and-pricing" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/fees-and-pricing")}
          >
            <img width={16} height={12.8} alt="fees and pricing icon" src={feesimg} />
            <span>{"Fees and Pricing"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/audit-logs" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/audit-logs")}
          >
            <img width={16} height={12.8} alt="audit logs icon" src={auditImg} />
            <span>{"Audit Logs"}</span>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === "/dashboard/system-messages" ? "active" : ""}`}
            onClick={() => handleMenuClick("/dashboard/system-messages")}
          >
            <img width={16} height={12.8} alt="system messages icon" src={tireimg} />
            <span>{"System Messages"}</span>
          </div>
        </div>

        <div
          className={`sidebar__menu ${activeMenu === "/logout" ? "active" : ""}`}
          onClick={() => handleMenuClick("/logout")}
        >
          <img width={16} height={12.8} alt="logout icon" src={logoutimg} />
          <span>{"Logout"}</span>
        </div>

        <Button
          onClick={() => {
            toggleSidebar();
          }}
          className="sidebar-toggle__button"
        >
          <img width={26} height={26} src={isSidebarOpen ? lisopenIcon : listicon} />
        </Button>
      </motion.nav>
    )
  );
}
