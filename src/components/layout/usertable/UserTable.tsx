import { useState, useEffect, useRef } from "react";
import filterIcon from "../../../assets/images/filter-icon.svg";
import "./UserTableStyle.scss";
import { useUserIdStore } from "../../../store/userId";
import Button from "../../ui/Button/Button";
import moreactionImg from "../../../assets/images/moreaction.svg";
import viewIcon from "../../../assets/images/eye-icon.svg";
import TableFilter from "../../ui/TableFilter/TableFilter";
import activeUserIcon from "../../../assets/images/activate.svg";
import blackListuser from "../../../assets/images/blacklist.svg";
import { useNavigate } from "react-router-dom";
import { updateUserStatus } from "../../../lib/db";
import type { User } from "../../../lib/db";
import EmptyState from "../../ui/EmptyState/EmptyState";
import { formatDate } from "../../../utils/formatDate";
import { truncateText } from "../../../utils/truncateText";

interface UserTableProps {
  readonly data: readonly User[];
  refetch: () => Promise<void>;
}

interface FilterValues {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}

export default function UserTable({ data, refetch }: UserTableProps) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isPopup, setIspopUp] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<User[]>([...data]);
  const filterRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const setUserId = useUserIdStore((state) => state.setUserId);

  console.log(data);

  const gotoUserDetails = (userId: string) => {
    setUserId(userId);
    navigate("/users/details");
  };

  const openFilter = () => {
    setFilter(true);
  };
  const closeFilter = () => {
    setFilter(false);
  };

  const toggleFilter = () => {
    if (filter === true) {
      closeFilter();
    } else {
      openFilter();
    }
  };

  const handlePopup = (userId: string) => {
    if (selectedId === userId && isPopup) {
      setIspopUp(false);
      setSelectedId("");
    } else {
      setIspopUp(true);
      setSelectedId(userId);
    }
  };

  const applyFilter = (filterValues: FilterValues) => {
    const newFilteredData = data.filter((user) => {
      const {
        username = "",
        organization = "",
        email = "",
        date = "",
        phoneNumber = "",
        status = "",
      } = filterValues;

      return (
        (!username ||
          `${user.personal_information.firstname} ${user.personal_information.lastname}`
            .toLowerCase()
            .includes(username.toLowerCase())) &&
        (!email || user.personal_information.email.toLowerCase().includes(email.toLowerCase())) &&
        (organization ? user.organization === organization : true) &&
        (!date ||
          new Date(user.dateJoined).toLocaleDateString() === new Date(date).toLocaleDateString()) &&
        (!phoneNumber || user.personal_information.phone_number.includes(phoneNumber)) &&
        (!status || user.status.toLowerCase() === status.toLowerCase())
      );
    });

    setFilteredData(newFilteredData);
    setFilter(false);
  };

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('img[alt="filter-icon"]')) {
        return;
      }

      if (filterRef.current && !filterRef.current.contains(target)) {
        setFilter(false);
      }
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        !target.closest(".user-table__actionbtn")
      ) {
        setIspopUp(false);
        setSelectedId("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusChange = async (userId: number, newStatus: string) => {
    await updateUserStatus(userId, newStatus);
    refetch();
    setIspopUp(false);
  };

  return (
    <div className="user-table__container" ref={tableRef}>
      {filter && (
        <div ref={filterRef}>
          <TableFilter onFilterApply={applyFilter} />
        </div>
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <div className="user-table__header">
                <p>ORGANIZATION</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
              </div>
            </th>
            <th>
              <div className="user-table__header">
                <p>USERNAME</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
              </div>
            </th>
            <th className="email_header">
              <div className="user-table__header">
                <p>EMAIL</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
              </div>
            </th>
            <th className="phone_header">
              <div className="user-table__header">
                {" "}
                <p>PHONE NUMBER</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
              </div>
            </th>
            <th className="date_joined">
              <div className="user-table__header">
                <p>DATE JOINED</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />{" "}
              </div>
            </th>
            <th>
              <div className="user-table__header status_header">
                <p>STATUS</p>
                <img
                  onClick={toggleFilter}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
              </div>
            </th>
            <th className="user-table__moreaction">
              <p>{"More"}</p>
            </th>
          </tr>
        </thead>
        {filteredData.length > 0 ? (
          <tbody>
            {filteredData.map((user: User) => (
              <tr key={user.userid} className="user-table__row">
                <td className="user-table__organization">{user.organization ?? "N/A"}</td>
                <td
                  onClick={() => gotoUserDetails(String(user.userid))}
                  className="user-table__username"
                >
                  {user.personal_information.firstname + " " + user.personal_information.lastname}
                </td>
                <td
                  onClick={() => gotoUserDetails(String(user.userid))}
                  className="user-table__email"
                >
                  {truncateText(user.personal_information.email) ?? "N/a"}
                </td>
                <td
                  onClick={() => gotoUserDetails(String(user.userid))}
                  className="user-table__phone"
                >
                  {truncateText(user.personal_information.phone_number) ?? "N/A"}
                </td>
                <td
                  onClick={() => gotoUserDetails(String(user.userid))}
                  className="user-table__date-joined"
                >
                  {formatDate(user.dateJoined) ?? "N/A"}
                </td>
                <td
                  onClick={() => gotoUserDetails(String(user.userid))}
                  className="user-table__status"
                >
                  <p className={`user-table__status-text ${user.status}`}>{user.status}</p>
                </td>
                <td>
                  <Button
                    className="user-table__actionbtn"
                    onClick={() => handlePopup(user.userid)}
                  >
                    <img width={3.33} height={14.44} alt="more action button" src={moreactionImg} />
                  </Button>
                  {selectedId === user.userid && isPopup && (
                    <div ref={popupRef} className="user-table__menu">
                      <Button onClick={() => gotoUserDetails(String(user.userid))}>
                        <img width={15.1} height={9.73} alt="view icon" src={viewIcon} />
                        <span>View Details</span>
                      </Button>
                      {user.status === "blacklisted" && (
                        <Button onClick={() => handleStatusChange(user.id, "active")}>
                          <img width={14} height={14} alt="active icon" src={activeUserIcon} />
                          <span>Activate User</span>
                        </Button>
                      )}

                      {user.status === "inactive" && (
                        <>
                          <Button onClick={() => handleStatusChange(user.id, "active")}>
                            <img width={14} height={14} alt="active icon" src={activeUserIcon} />
                            <span>Activate User</span>
                          </Button>
                          <Button onClick={() => handleStatusChange(user.id, "blacklisted")}>
                            <img width={14} height={14} alt="blacklist icon" src={blackListuser} />
                            <span>Blacklist User</span>
                          </Button>
                        </>
                      )}

                      {user.status === "active" && (
                        <>
                          <Button onClick={() => handleStatusChange(user.id, "inactive")}>
                            <img width={14} height={14} alt="inactive icon" src={blackListuser} />
                            <span>Deactivate User</span>
                          </Button>
                          <Button onClick={() => handleStatusChange(user.id, "blacklisted")}>
                            <img width={14} height={14} alt="blacklist icon" src={blackListuser} />
                            <span>Blacklist User</span>
                          </Button>
                        </>
                      )}

                      {user.status === "pending" && (
                        <>
                          <Button onClick={() => handleStatusChange(user.id, "active")}>
                            <img width={14} height={14} alt="active icon" src={activeUserIcon} />
                            <span>Activate User</span>
                          </Button>
                          <Button onClick={() => handleStatusChange(user.id, "inactive")}>
                            <img width={14} height={14} alt="inactive icon" src={blackListuser} />
                            <span>Deactivate User</span>
                          </Button>
                          <Button onClick={() => handleStatusChange(user.id, "blacklisted")}>
                            <img width={14} height={14} alt="blacklist icon" src={blackListuser} />
                            <span>Blacklist User</span>
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={7}>
                <EmptyState title="No data Found" desc="Try refreshing this page to view data" />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
