// css
import "../Register/Register.css"

//components
import { useState } from 'react'
import AppRegister from "../../components/AppRegister/AppRegister";
import AppTitle from "../../components/AppTitle/AppTitle";

export default function Register() {

  return (
    <div className="register-container" id="register">
      <AppTitle title="REGISTER" />
      <AppRegister />
    </div>
  );
}
