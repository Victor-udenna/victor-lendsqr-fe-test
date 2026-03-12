import type { User } from "../../../lib/db";
import "./UserGeneralDetailsStyle.scss";

interface UserGeneralDetailsProps {
  readonly user: User;
}

const UserGeneralDetails = ({ user }: UserGeneralDetailsProps) => {
  console.log(user);
  return (
    <div className="details__body">
      <div className="details__information">
        <p className="details___information__header">{"Personal Information"}</p>
        <div className="details_information__wrapper">
          <div className="details__information__container">
            <p className="details__information__header__text">{"Full Name"}</p>
            <p className="details__information__text">
              {user
                ? user.personal_information.firstname + " " + user.personal_information.lastname
                : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Phone Number"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.phone_number : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Email Address"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.email : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"BVN"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.bvn : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Gender"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.gender : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Marital Status"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.marital_status : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Children"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.children : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Type of Residence"}</p>
            <p className="details__information__text">
              {user ? user.personal_information.residence_type : "Loading..."}
            </p>
          </div>
        </div>
      </div>
      <div className="details__information">
        <p className="details___information__header">{"Education and Employment"}</p>
        <div className="details_information__wrapper details_information__wrapper_2">
          <div className="details__information__container">
            <p className="details__information__header__text">{"Level of Education"}</p>
            <p className="details__information__text">
              {user ? user.education_employment.education_level : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Employment Status"}</p>
            <p className="details__information__text">
              {user
                ? user.education_employment.is_employed
                  ? "Employed"
                  : "Unemployed"
                : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Sector of Employment"}</p>
            <p className="details__information__text">
              {user ? user.education_employment.employment_sector : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Duration of Employment"}</p>
            <p className="details__information__text">
              {user ? user.education_employment.employment_duration + " years" : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Office Email"}</p>
            <p className="details__information__text">
              {user ? user.education_employment.office_email : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Monthly Income"}</p>
            <p className="details__information__text">
              {user
                ? "₦" +
                  user.education_employment.min_monthly_income?.toLocaleString() +
                  " - ₦" +
                  user.education_employment.max_monthly_income?.toLocaleString()
                : "Loading..."}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Loan Repayment"}</p>
            <p className="details__information__text">
              {user
                ? "₦" + user.education_employment.loan_repayment?.toLocaleString()
                : "Loading..."}
            </p>
          </div>
        </div>
      </div>
      <div className="details__information">
        <p className="details___information__header">{"Socials"}</p>
        <div className="details_information__wrapper">
          <div className="details__information__container">
            <p className="details__information__header__text">{"Twitter"}</p>
            <p className="details__information__text">{user ? user.socials.twitter : "loading"}</p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Facebook"}</p>
            <p className="details__information__text">{user ? user.socials.facebook : "loading"}</p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Instagram"}</p>
            <p className="details__information__text">
              {user ? user.socials.instagram : "loading"}
            </p>
          </div>
        </div>
      </div>
      <div className="details__information">
        <p className="details___information__header">{"Guarantor"}</p>
        <div className="details_information__wrapper">
          <div className="details__information__container">
            <p className="details__information__header__text">{"Full Name"}</p>
            <p className="details__information__text">
              {user ? user?.guarantor?.firstname + " " + user?.guarantor?.lastname : "loading"}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Phone Number"}</p>
            <p className="details__information__text">
              {user ? user?.guarantor?.phone_number : "loading"}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Email Address"}</p>
            <p className="details__information__text">
              {user ? user?.guarantor?.email : "loading"}
            </p>
          </div>
          <div className="details__information__container">
            <p className="details__information__header__text">{"Relationship"}</p>
            <p className="details__information__text">
              {user ? user?.guarantor?.relationship : "loading"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGeneralDetails;
