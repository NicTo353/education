import { Form, Input, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const LoginPage = (props) => {
  const { email, password, message, changeField, clear, submit } = props;
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
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
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
        <div style={{ maxWidth: "600px", flex: "1 0 300px", margin: "0 auto" }}>
          <Title style={{ textAlign: "center" }}>Авторизация</Title>
          <Title level={3} style={{ textAlign: "center", color: "red" }}>
            {message}
          </Title>

          <Form
            {...formItemLayout}
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>

              <Button style={{ marginLeft: "20px" }} type="ghost" htmlType="reset" onClick={clear}>
                Очистить
              </Button>

              <Link style={{ marginLeft: "20px" }} to={RouteNames.REGISTRATION}>
                Нет аккаунта?
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
