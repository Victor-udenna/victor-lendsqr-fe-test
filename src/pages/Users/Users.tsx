import { useEffect, useState } from "react";
import "./UserStyle.scss";
import UserSummary from "../../components/layout/usersummary/UserSummary";
import UserTable from "../../components/layout/usertable/UserTable";
import Pagination from "../../components/ui/pagination/Pagination";
import LoaderUi from "../../components/ui/Loader/LoaderUi";
import db from "../../lib/db";
import type { User } from "../../lib/db";

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  async function fetchUsers() {
    try {
      const users = await db.users.toArray();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUsers([]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users === null) {
    return <LoaderUi />;
  }

  if (users.length === 0) {
    return <p className="no-users">No users found.</p>;
  }

  const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <section className="user-page">
      <h2 className="userpage__header-text">Users</h2>
      <UserSummary users={users} />
      <UserTable refetch={fetchUsers} data={paginatedUsers} />
      <Pagination
        totalCount={users.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </section>
  );
};

export default Users;
