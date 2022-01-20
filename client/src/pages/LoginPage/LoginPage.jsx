import { Form, Input, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };

  return (
    <div
      style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div style={{ maxWidth: "600px", flex: "1 0 300px", margin: "0 auto"}}>
        <Title style={{ textAlign: "center" }}>Авторизация</Title>

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
            <Input type="email" />
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
            <Input.Password minLength={8} />
          </Form.Item>

          <Form.Item

            wrapperCol={{ span: 24 }}
            style={{ textAlign: "center" }}
          >
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            <Link style={{ marginLeft: "20px" }} to={RouteNames.REGISTRATION}>
              Нет аккаунта?
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
