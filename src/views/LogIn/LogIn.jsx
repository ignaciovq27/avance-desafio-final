// css
import "../LogIn/LogIn.css"

//components
import AppLogIn from "../../components/AppLogIn/AppLogIn";
import AppTitle from "../../components/AppTitle/AppTitle";

export default function Register() {

  return (
    <div className="logIn-container" id="logIn">
      <AppTitle title="LOGIN" />
      <AppLogIn />
    </div>
  );
}
