import React from "react";
import DBForm from "../components/DBForm";

const FormPage = () => {
  return (
    <div className="form-container">
      <h2>Fill out your credentials below <br/> to get started</h2>
      <DBForm location='local' />
    </div>
  )
}

export default FormPage;