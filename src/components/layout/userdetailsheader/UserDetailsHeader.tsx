import "./UserDetailsHeaderStyle.scss";
import Button from "../../ui/Button/Button";
import type { User } from "../../../lib/db";
import { useNavigate } from "react-router-dom";
import { updateUserStatus } from "../../../lib/db";
import arrow from "../../../assets/images/arrow-left-long.svg";
import starLine from "../../../assets/images/star-line.svg";
import userAvatar from "../../../assets/images/user-avatar.png";
import starFill from "../../../assets/images/star-fill.svg";

interface UserDetailsHeaderProps {
  readonly user: User;
}

const UserDetailsHeader = ({ user }: UserDetailsHeaderProps) => {
  const navigate = useNavigate();
  const handleStatusChange = async (userId: number, newStatus: string) => {
    await updateUserStatus(userId, newStatus);
  };
  return (
    <div>
      <Button
        className="details-back__btn"
        onClick={() => {
          navigate("/users");
        }}
      >
        <img width={26.72} height={9.38} alt="back to user button" src={arrow} />
        <span>Back to Users</span>
      </Button>

      <div className="details__header">
        <div className="details__header__cta">
          <h2 className="details__header__text">User details</h2>
          <div className="details__button__container">
            {user?.status === "blacklisted" && (
              <Button
                onClick={() => handleStatusChange(user.id, "active")}
                className="details__activate__btn"
              >
                <span>Activate User</span>
              </Button>
            )}
            {user?.status === "inactive" && (
              <>
                <Button
                  onClick={() => handleStatusChange(user.id, "active")}
                  className="details__activate__btn"
                >
                  <span>Activate User</span>
                </Button>
                <Button
                  onClick={() => handleStatusChange(user.id, "blacklisted")}
                  className="details__blacklist__btn"
                >
                  <span>Blacklist User</span>
                </Button>
              </>
            )}
            {user?.status === "active" && (
              <>
                <Button
                  onClick={() => handleStatusChange(user.id, "inactive")}
                  className="details__deactivate__btn"
                >
                  <span>Deactivate User</span>
                </Button>
                <Button
                  onClick={() => handleStatusChange(user.id, "blacklisted")}
                  className="details__blacklist__btn"
                >
                  <span>Blacklist User</span>
                </Button>
              </>
            )}
            {user?.status === "pending" && (
              <>
                <Button
                  onClick={() => handleStatusChange(user.id, "active")}
                  className="details__activate__btn"
                >
                  <span>Activate User</span>
                </Button>
                <Button
                  onClick={() => handleStatusChange(user.id, "inactive")}
                  className="details__deactivate__btn"
                >
                  <span>Deactivate User</span>
                </Button>
                <Button
                  onClick={() => handleStatusChange(user.id, "blacklisted")}
                  className="details__blacklist__btn"
                >
                  <span>Blacklist User</span>
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="details__header__container">
          <div className="details__header_content">
            <img
              className="details__header__img"
              width={100}
              height={100}
              alt="user-avatar"
              src={userAvatar}
            />

            <div className="details__header__text__container">
              <p className="user__name">
                {user
                  ? user?.personal_information?.firstname +
                    " " +
                    user?.personal_information?.lastname
                  : "loading"}
              </p>
              <p className="user__id">{user ? user?.personal_information?.email : "loading"}</p>
            </div>
            <div className="details__header__text__container user__tier__container">
              <p className="user__tier">{user ? "User’s Tier" : "loading"}</p>

              {user?.user_tier === 1 && (
                <div className="user__tier__rate">
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starLine} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starLine} />
                </div>
              )}

              {user?.user_tier === 2 && (
                <div className="user__tier__rate">
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starLine} />
                </div>
              )}

              {user?.user_tier === 3 && (
                <div className="user__tier__rate">
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <img alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                </div>
              )}
            </div>
            <div className="details__header__text__container">
              <p className="user__loan">
                {user ? "₦" + user.account_balance?.toLocaleString() : "loading"}
              </p>
              <p className="user__bank">{`${user ? user.account_number : "loading"}/${
                user ? user.bank : "loading"
              }`}</p>
            </div>
          </div>

          <div className="details__header__link-container">
            <p className="details__header__link active">{"General Details"}</p>
            <p className="details__header__link">{"Documents"}</p>
            <p className="details__header__link">{"Bank Details"}</p>
            <p className="details__header__link">{"Loans"}</p>
            <p className="details__header__link">{"Loans"}</p>
            <p className="details__header__link">{"App and System"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsHeader;
