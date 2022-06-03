import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "antd";

const NewLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinishFailed = () => {
    console.log("FAIL!")
  }

  async function loginUser(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    const response = await fetch("https://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("phoneToken", data.phones);
      localStorage.setItem("surnameToken", data.surname);
      localStorage.setItem("admin", data.admin);
      window.location.href = "/termin";
    }
  }

  return (
    <Form
      className="login_content"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={loginUser}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input size="middle"
          className="login_input"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
            console.log(email)
          }}
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
          className="login_input"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPassword(e.currentTarget.value);
            console.log(password)
          }}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className="login_button"
          type="primary"
          htmlType="submit"
        >
          Zaloguj!
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
          href="http://localhost:3000/register"
          type="primary"
        >
          Rejestracja
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewLogin;
