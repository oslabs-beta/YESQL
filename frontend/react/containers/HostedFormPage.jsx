import React from "react";
import DBForm from "../components/DBForm";

const HostedFormPage = () => {
  return (
    <div>
      <h2>Fill out your credentials below <br/>to get started</h2>
      <DBForm location='hosted' />
    </div>
  )
}

export default HostedFormPage;