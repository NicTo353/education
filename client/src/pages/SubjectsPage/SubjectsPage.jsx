import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";

const SubjectsPage = (props) => {
  const { update, subjects } = props;
  useEffect(() => {
    update();
  }, [update]);

  const dataSource = subjects.map((s, index) => {
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
      title: "Предмет",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <>
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Предметы</Title>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default SubjectsPage;
