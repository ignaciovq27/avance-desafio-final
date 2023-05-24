// css
import "../UserDashboardEdit/UserDashboardEdit.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserDashboardEdit from "../../components/AppUserDashboardEdit/AppUserDashboardEdit";

export default function UserDashboardEdit() {

  return (
    <div className="userDashboardEdit-container" id="userDashboardEdit">
      <AppTitle title="USER DASHBOARD EDIT" />
      <AppUserDashboardEdit />
    </div>
  );
}
