import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";

const StudentsPage = (props) => {
  const { update, students } = props;
  useEffect(() => {
    update();
  }, [update]);

  const dataSource = students.map((s, index) => {
    return {
      ...s,
      key: s.id,
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
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Cтуденты</Title>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default StudentsPage;
