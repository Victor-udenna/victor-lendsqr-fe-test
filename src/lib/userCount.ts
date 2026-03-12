import { useState, useEffect } from "react";
import type { User } from "./db";

const useUserCount = (data: User[]) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [userwithLoan, setUserwithLoan] = useState(0);
  const [userwithSavings, setUserwithSavings] = useState(0);

  useEffect(() => {
    if (Array.isArray(data)) {
      setTotalUsers(data.length);

      const activeUsers = data.filter((user: User) => user.status === "active");
      setActiveUsers(activeUsers.length);

      const loanUsers = data.filter((user: User) => user.withLoan === true);
      setUserwithLoan(loanUsers.length);

      const savingsUsers = data.filter((user: User) => user.withSavings === true);
      setUserwithSavings(savingsUsers.length);
    }
  }, [data]);

  return { totalUsers, activeUsers, userwithLoan, userwithSavings };
};

export default useUserCount;
