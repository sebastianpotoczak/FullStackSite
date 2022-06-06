import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "antd";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");

  const onFinish = (values: string) => {
    console.log(
      "Success:",
      email,
      name,
      surname,
      phone,
      password,
      setPassword,
      secondPassword
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 16,
      }}
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
            message: "Please input your e-mail!",
          },
        ]}
      >
        <Input
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
          className="register_input"
        />
      </Form.Item>
      <Form.Item
        label="Imie"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
          }}
          className="register_input"
        />
      </Form.Item>
      <Form.Item
        label="Nazwisko"
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}
      >
        <Input
          className="register_input"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSurname(e.currentTarget.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Telefon"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPhone(e.currentTarget.value);
          }}
          className="register_input"
        />
      </Form.Item>
      <Form.Item
        label="Hasło"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPassword(e.currentTarget.value);
          }}
          className="register_input"
        />
      </Form.Item>
      <Form.Item
        label="Hasło"
        name="semipassword"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSecondPassword(e.currentTarget.value);
          }}
          className="register_input"
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className="login_button" type="primary" htmlType="submit">
          Zarejestruj
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className="login_button"
          href="http://localhost:3000/termin"
          type="primary"
        >
          Masz już konto?
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
