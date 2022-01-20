import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";

const TeachersPage = (props) => {
  const { teachers, update } = props;

  useEffect(() => {
    update();
  }, [update]);

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
    </>
  );
};

export default TeachersPage;
