import "./UserDetailsStyle.scss";
import db from "../../lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import UserDetailsHeader from "../../components/layout/userdetailsheader/UserDetailsHeader";
import UserGeneralDetails from "../../components/layout/usergeneraldetails/UserGeneralDetails";
import LoaderUi from "../../components/ui/Loader/LoaderUi";
import { useUserIdStore } from "../../store/userId";

const UserDetails = () => {
  const userId = useUserIdStore((state) => state.userId);
  console.log(userId);

  const user = useLiveQuery(async () => {
    if (userId) {
      return await db.users.where("userid").equals(userId).first();
    }
    return null;
  }, [userId]);

  if (!user) {
    return <LoaderUi />;
  }

  return (
    <section className="user-details-page">
      <UserDetailsHeader user={user} />
      <UserGeneralDetails user={user} />
    </section>
  );
};

export default UserDetails;
