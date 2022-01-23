import { Button, Input } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import Title from "antd/lib/typography/Title";
import React from "react";

const AddSubjectForm = (props) => {
  const { close, subjects, submit } = props;
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
      <Title style={{ textAlign: "center" }}>Добавление предмета</Title>

      <Form
        onFinish={(values) => {
          submit(values.name);
          close();
        }}
      >
        <FormItem
          rules={[
            {
              required: true,
              message: "Введите название предмета",
            },
            {
              validator(_, value) {
                if (!subjects.find((s) => s.name === value)) {
                  return Promise.resolve();
                }
                return Promise.reject("Предмет должен быть уникальным");
              },
            },
          ]}
          name="name"
          label="Название предмета"
        >
          <Input name="name" />
        </FormItem>

        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default AddSubjectForm;
