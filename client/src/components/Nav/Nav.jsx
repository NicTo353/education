import { Button, Menu } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { RouteNames } from "../../routes";

const Nav = (props) => {
  const { logout } = props;
  const { role } = useContext(AppContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ color: "#fff", fontSize: "20px" }}>LOGO</div>

      <Menu theme="dark" mode="horizontal">
        {role ? (
          <>
            <Menu.Item key={RouteNames.TEACHERS}>
              <Link to={RouteNames.TEACHERS}>Учителя</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.SUBJECTS}>
              <Link to={RouteNames.SUBJECTS}>Предметы</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.SCHEDULES}>
              <Link to={RouteNames.SCHEDULES}>Расписания</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.GROUPS}>
              <Link to={RouteNames.GROUPS}>Группы</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Button type="link" style={{ color: "inherit" }} onClick={logout}>
                Выйти
              </Button>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <Link to={RouteNames.REGISTRATION}>Зарегистрироваться</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={RouteNames.LOGIN}>Войти</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Nav;
