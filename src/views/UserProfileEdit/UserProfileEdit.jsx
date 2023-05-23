// css
import "../UserProfile/UserProfile.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserProfileEdit from "../../components/AppUserProfileEdit/AppUserProfileEdit";

export default function UserProfile() {

  return (
    <div className="userProfile-container" id="userProfile">
      <AppTitle title="USER PROFILE EDIT" />
      <AppUserProfileEdit />
    </div>
  );
}
