// css
import "../LogIn/LogIn.css"

//components
import { useState } from 'react'
import AppLogIn from "../../components/AppLogIn/AppLogIn";

export default function Register() {

  return (
    <div className="LogIn-container" id="logIn">
      <h2> LOGIN </h2>
      <hr />
      <AppLogIn />
    </div>
  );
}
