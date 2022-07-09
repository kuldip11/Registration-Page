import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { emailRules, passwordRules } from "../../helper/rules";
import { userApi } from "../../lib/API";

const LogIn = ({ setPage }) => {
    const [form] = Form.useForm();
    const { Item } = Form;

    const pageChangeHandler = () => {
        setPage("signup");
    };

    const login = (logInDetails) => {
        var data = new FormData();
        for (const property in logInDetails) {
        data.append(`${property}`, logInDetails[property]);
        }
        userApi
        .post("/login", data)
        .then((response) => {
            if (response?.data?.status === "success") {
                console.log(response);
                localStorage.setItem(
                    "userId",
                    JSON.stringify(response?.data?.data?.id)
                );
                form.resetFields();
                setPage("userprofile");
            } else if (response?.data?.status === "error") {
            message.error(response?.data?.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const handleFormSubmit = async (e) => {
        e.stopPropagation();
        form
        .validateFields()
        .then(async (values) => {
            try {
            login(values);
            } catch (error) {
            console.log(error);
            }
        })
        .catch((info) => {
            console.log("validation failed", info);
        });
        setPage("userprofile");
    };

  return (
    <div className="log-in">
      <h2>Welcome Back</h2>
      <Form className="login-form" form={form} name="login-page">
        <div className="logIn-column">
          <Item className="email" name="email" rules={emailRules}>
            <Input placeholder="Email" />
          </Item>

          <Item
            name="password"
            className="login-password"
            hasFeedback
            rules={passwordRules}
          >
            <Input.Password placeholder="Password" />
          </Item>
          <button className="submit-btn" onClick={handleFormSubmit}>
            Sign In
          </button>
        </div>
      </Form>
      <h4>
        Don't have an account?
        <spam className="switchPage" onClick={pageChangeHandler}>
          {" "}
          Signup
        </spam>
      </h4>
    </div>
  );
};

export default LogIn;
