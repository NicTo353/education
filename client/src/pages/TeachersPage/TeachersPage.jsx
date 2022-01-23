import { Button, Table } from "antd";
import Title from "antd/lib/typography/Title";
import { useContext, useEffect, useState } from "react";
import AddTeacherFormContainer from "../../components/AddTeacherForm/AddTeacherFormContainer";
import AppContext from "../../context";

const TeachersPage = (props) => {
  const { teachers, update } = props;

  useEffect(() => {
    update();
  }, [update]);

  const { role } = useContext(AppContext);

  const [isAddTeacherFormVisible, setIsAddTeacherFormVisible] = useState(false);

  const dataSource = teachers.map((t, index) => {
    return {
      ...t,
      key: t.id,
      index: index + 1,
    };
  });

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Фамилия",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Отчество",
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <>
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Учителя</Title>
      <Table dataSource={dataSource} columns={columns} />

      {role !== "DEAN" ? null : (
        <>
          <Button
            onClick={() => {
              setIsAddTeacherFormVisible(!isAddTeacherFormVisible);
            }}
          >
            {isAddTeacherFormVisible ? "Отменить добавление учителя" : "Добавить учителя"}
          </Button>
          {!isAddTeacherFormVisible ? null : <AddTeacherFormContainer />}
        </>
      )}
    </>
  );
};

export default TeachersPage;
