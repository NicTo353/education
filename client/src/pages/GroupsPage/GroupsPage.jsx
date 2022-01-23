import { Button, Table } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useContext, useEffect, useState } from "react";
import AddGroupFormContainer from "../../components/AddGroupForm/AddGroupFormContainer";
import AppContext from "../../context";

const GroupsPage = (props) => {
  const { update, groups, deleteOne } = props;
  useEffect(() => {
    update();
  }, [update]);
  const [isAddGroupFormVisible, setIsAddGroupFormVisible] = useState(false);
  const { role } = useContext(AppContext);

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

  if (role === "DEAN") {
    columns.push({
      title: "Действия",
      dataIndex: "",
      key: "id",
      render: (column) => {
        return (
          <Button
            type="danger"
            onClick={() => {
              deleteOne(column.id);
            }}
          >
            Удалить
          </Button>
        );
      },
    });
  }

  return (
    <>
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Группы</Title>
      <Table dataSource={dataSource} columns={columns} />

      {role !== "DEAN" ? null : (
        <>
          <Button
            onClick={() => {
              setIsAddGroupFormVisible(!isAddGroupFormVisible);
            }}
          >
            {isAddGroupFormVisible ? "Отменить добавление группы" : "Добавить группу"}
          </Button>
          {!isAddGroupFormVisible ? null : <AddGroupFormContainer groups={groups} />}
        </>
      )}
    </>
  );
};

export default GroupsPage;
