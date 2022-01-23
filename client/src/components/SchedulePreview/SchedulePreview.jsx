import React, { useContext } from "react";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import { Link } from "react-router-dom";
import AppContext from "../../context";

const SchedulePreview = (props) => {
  const { id, name, deleteOne } = props;

  const { role } = useContext(AppContext);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "40px",
        minHeight: "200px",
        flex: "0 0 300px",
        border: "1px solid #c4c4c4",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {role !== "DEAN" ? null : (
        <DeleteOutlined
          style={{ color: "red", position: "absolute", right: "20px", top: "20px" }}
          onClick={(event) => {
            event.stopPropagation();
            deleteOne(id);
          }}
        />
      )}

      <p>{name}</p>

      <Link to={`/schedule/${id}`} style={{ position: "absolute", left: "20px", bottom: "10px" }}>
        Просмотреть
      </Link>
    </div>
  );
};

export default SchedulePreview;
