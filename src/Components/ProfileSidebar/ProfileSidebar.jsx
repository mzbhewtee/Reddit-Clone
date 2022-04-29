import { Footer } from "../Sidebar/Footer/Footer";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";
import { PeopleProfile } from "./PeopleProfile/PeopleProfile";
import { useParams } from "react-router";
import { loadData } from "../../utils/localStorage";

export const ProfileSidebar = () => {
  const { userId } = useParams();
  const { _id } = loadData("user");
  console.log(userId, _id);

  return (
    <>
      {userId === _id ? <ProfileDetails /> : <PeopleProfile />}

      <Footer />
    </>
  );
};
