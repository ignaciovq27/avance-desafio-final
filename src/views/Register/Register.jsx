// css
import "../Register/Register.css"

//components
import { useState } from 'react'
import AppRegister from "../../components/AppRegister/AppRegister";

export default function Register() {

  return (
    <div className="register-container" id="logIn">
      <AppRegister />
    </div>
  );
}
