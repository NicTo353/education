import { Menu } from "antd";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const Nav = () => {
  return (
    <Menu theme="dark"  mode="horizontal">
      <Menu.Item key={RouteNames.STUDENTS}>
        <Link to={RouteNames.STUDENTS}>Студенты</Link>
      </Menu.Item>
      <Menu.Item key={RouteNames.TEACHERS}>
        <Link to={RouteNames.TEACHERS}>Учителя</Link>
      </Menu.Item>
      <Menu.Item key={RouteNames.SUBJECTS}>
        <Link to={RouteNames.SUBJECTS}>Предметы</Link>
      </Menu.Item>
      <Menu.Item key={RouteNames.SCHEDULES}>
        <Link to={RouteNames.SCHEDULES}>Расписания</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
