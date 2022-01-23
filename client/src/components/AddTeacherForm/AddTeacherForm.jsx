import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import Title from "antd/lib/typography/Title";
import AppContext from "../../context";
import Checkbox from "antd/lib/checkbox/Checkbox";

const AddTeacherForm = (props) => {
  const { email, password, name, surname, parentName, clear, changeField, submit, title, isDean } =
    props;

  const { role } = useContext(AppContext);

  const onFinish = (values) => {
    submit({ ...values, isDean });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const inputHandler = (event) => {
    changeField(event.target.name, event.target.value);
  };

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <div
      style={{
        maxWidth: "600px",
        flex: "1 0 300px",
        margin: "0 auto",
        border: "1px solid #c4c4c4",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Title span={10} style={{ textAlign: "center" }}>
        {title}
      </Title>

      <Form
        {...formItemLayout}
        name="reg"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Фамилия"
          name="surname"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите свою фамилию",
            },
          ]}
        >
          <Input name="surname" value={surname} onChange={inputHandler} />
        </Form.Item>

        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите свое имя",
            },
          ]}
        >
          <Input name="name" value={name} onChange={inputHandler} />
        </Form.Item>

        <Form.Item
          label="Отчество"
          name="parentName"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите свое отчество",
            },
          ]}
        >
          <Input name="parentName" value={parentName} onChange={inputHandler} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите email",
            },
          ]}
        >
          <Input type="email" name="email" value={email} onChange={inputHandler} />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваш пароль",
            },
          ]}
        >
          <Input.Password minLength={8} name="password" value={password} onChange={inputHandler} />
        </Form.Item>

        {role !== "DEAN" ? null : (
          <Form.Item label="Декан?" name="isDean">
            <Checkbox
              onChange={(event) => {
                changeField(event.target.name, event.target.checked);
              }}
              name="isDean"
              checked={isDean}
            />
          </Form.Item>
        )}

        <div style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>

          <Button style={{ marginLeft: "20px" }} type="ghost" htmlType="reset" onClick={clear}>
            Очистить
          </Button>

          {role ? null : (
            <Link style={{ marginLeft: "20px" }} to={RouteNames.LOGIN}>
              Уже есть аккаунт?
            </Link>
          )}
        </div>
      </Form>
    </div>
  );
};

export default AddTeacherForm;
