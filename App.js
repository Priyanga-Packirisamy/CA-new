import React from "react";
import InputComponent from "./InputComponent";

export default function App() {

  const inputList = [{ type: "text", label: "Enter your username", placeholder: "your Username", datatestid: 'username' },
  { type: "email", label: "Enter your email", placeholder: "Your Email", datatestid: 'email' },
  { type: "password", label: "Enter your password", placeholder: "your Password", datatestid: 'password' }]

  return (
    <>
      <InputComponent prop={inputList} />
    </>
  );
}
