import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";

const GroupsPage = (props) => {
  const { update, groups } = props;
  useEffect(() => {
    update();
  }, [update]);

  const dataSource = groups.map((g, index) => {
    return {
      ...g,
      key: g.id,
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
      title: "Группа",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <>
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Группы</Title>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default GroupsPage;
