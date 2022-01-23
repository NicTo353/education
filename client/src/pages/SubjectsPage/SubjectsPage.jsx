import { Button, Table } from "antd";
import Title from "antd/lib/typography/Title";
import { useContext, useEffect, useState } from "react";
import AddSubjectFormContainer from "../../components/AddSubjectForm/AddSubjectFormContainer";
import AppContext from "../../context";

const SubjectsPage = (props) => {
  const { update, subjects, deleteOne } = props;
  useEffect(() => {
    update();
  }, [update]);
  const [isAddSubjectFormVisible, setIsAddSubjectFormVisible] = useState(false);
  const { role } = useContext(AppContext);

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
      key: "idnex",
    },
    {
      title: "Предмет",
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
      <Title style={{ textAlign: "center", marginBottom: "40px" }}>Предметы</Title>
      <Table dataSource={dataSource} columns={columns} />

      {role !== "DEAN" ? null : (
        <>
          <Button
            onClick={() => {
              setIsAddSubjectFormVisible(!isAddSubjectFormVisible);
            }}
          >
            {isAddSubjectFormVisible ? "Отменить добавление предмета" : "Добавить предмет"}
          </Button>
          {!isAddSubjectFormVisible ? null : (
            <AddSubjectFormContainer
              close={() => setIsAddSubjectFormVisible(false)}
              subjects={subjects}
            />
          )}
        </>
      )}
    </>
  );
};

export default SubjectsPage;
