import { useEffect, useState, useRef } from "react";
import "./UserSummaryStyle.scss";
import userIcon from "../../../assets/images/user.svg";
import activeIcon from "../../../assets/images/active-user.svg";
import userLoan from "../../../assets/images/user-loan.svg";
import userSaving from "../../../assets/images/usersaving.svg";
import type { User } from "../../../lib/db";
import useUserCount from "../../../lib/userCount";

const UserSummary = ({ users }: { users: User[] }) => {
  const [animatedCount, setAnimatedCount] = useState({
    totalUsers: 0,
    activeUsers: 0,
    userwithLoan: 0,
    userwithSavings: 0,
  });

  const intervalsRef = useRef<{ [key: string]: number }>({});
  const { totalUsers, activeUsers, userwithLoan, userwithSavings } = useUserCount(users);
  useEffect(() => {
    const duration = 400;
    Object.values(intervalsRef.current).forEach((interval) => clearInterval(interval));
    intervalsRef.current = {};

    const animateCount = (targetValue: number, field: keyof typeof animatedCount) => {
      if (targetValue === 0) {
        setAnimatedCount((prev) => ({ ...prev, [field]: 0 }));
        return;
      }
      const step = Math.max(1, Math.ceil(targetValue / (duration / 16)));
      let currentValue = 0;
      intervalsRef.current[field] = setInterval(() => {
        currentValue += step;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          setAnimatedCount((prev) => ({ ...prev, [field]: currentValue }));
          clearInterval(intervalsRef.current[field]);
          delete intervalsRef.current[field];
        } else {
          setAnimatedCount((prev) => ({ ...prev, [field]: currentValue }));
        }
      }, 16);
    };
    setAnimatedCount({
      totalUsers: 0,
      activeUsers: 0,
      userwithLoan: 0,
      userwithSavings: 0,
    });
    setTimeout(() => {
      animateCount(totalUsers, "totalUsers");
      animateCount(activeUsers, "activeUsers");
      animateCount(userwithLoan, "userwithLoan");
      animateCount(userwithSavings, "userwithSavings");
    }, 50);
    return () => {
      Object.values(intervalsRef.current).forEach((interval) => clearInterval(interval));
      intervalsRef.current = {};
    };
  }, [totalUsers, activeUsers, userwithLoan, userwithSavings]);

  return (
    <div className="user__summary-container">
      <div className="user__summary-card">
        <img src={userIcon} width={40} height={40} alt="summary icon" />
        <p className="user__summary-card-title">Users</p>
        <p className="user__summary-card-count">{animatedCount.totalUsers}</p>
      </div>
      <div className="user__summary-card">
        <img src={activeIcon} width={40} height={40} alt="summary icon" />
        <p className="user__summary-card-title">Active Users</p>
        <p className="user__summary-card-count">{animatedCount.activeUsers}</p>
      </div>
      <div className="user__summary-card">
        <img src={userLoan} width={40} height={40} alt="summary icon" />
        <p className="user__summary-card-title">Users with Loans</p>
        <p className="user__summary-card-count">{animatedCount.userwithLoan}</p>
      </div>
      <div className="user__summary-card">
        <img src={userSaving} width={40} height={40} alt="summary icon" />
        <p className="user__summary-card-title">Users with Savings</p>
        <p className="user__summary-card-count">{animatedCount.userwithSavings}</p>
      </div>
    </div>
  );
};

export default UserSummary;
