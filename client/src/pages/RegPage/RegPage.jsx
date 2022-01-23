import React from "react";
import AddTeacherForm from "../../components/AddTeacherForm/AddTeacherForm";

const RegPage = (props) => {
  const { email, password, name, surname, parentName, clear, changeField, submit, message } = props;

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddTeacherForm
        email={email}
        password={password}
        name={name}
        surname={surname}
        parentName={parentName}
        clear={clear}
        changeField={changeField}
        submit={submit}
        message={message}
        title={"Регистрация"}
      />
    </div>
  );
};

export default RegPage;
