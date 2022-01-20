import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import Title from "antd/lib/typography/Title";

const RegPage = (props) => {
  const { email, password, name, surname, parentName, clear, changeField, submit, message } = props;

  const onFinish = (values) => {
    submit(values);
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
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "600px", flex: "1 0 300px", margin: "0 auto" }}>
        <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
          <Title span={10} style={{ textAlign: "center" }}>
            Регистрация
          </Title>
          <Title level={3} style={{ textAlign: "center", color: "red" }}>
            {message}
          </Title>
        </Form.Item>

        <Form
          {...formItemLayout}
          name="reg"
          initialValues={{
            remember: true,
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
            <Input.Password
              minLength={8}
              name="password"
              value={password}
              onChange={inputHandler}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }} wrapperCol={{ span: 20, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>

            <Button style={{ marginLeft: "20px" }} type="ghost" htmlType="reset" onClick={clear}>
              Очистить
            </Button>

            <Link style={{ marginLeft: "20px" }} to={RouteNames.LOGIN}>
              Уже есть аккаунт?
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegPage;
