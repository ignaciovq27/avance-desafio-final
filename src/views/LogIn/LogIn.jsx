// css
import "../LogIn/LogIn.css"

//components
import { useState } from 'react'
import AppLogIn from "../../components/AppLogIn/AppLogIn";
import AppTitle from "../../components/AppTitle/AppTitle";

export default function Register() {

  return (
    <div className="LogIn-container" id="logIn">
      <AppTitle title="LOGIN" />
      <AppLogIn />
    </div>
  );
}
