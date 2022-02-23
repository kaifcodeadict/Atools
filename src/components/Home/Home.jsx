import "./style.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import React from "react";
import Poster from "../../Assets/poster.png";
import { Button, Image } from "antd";
import { Form, Input, Typography, Space, Checkbox } from "antd";
const { Title } = Typography;
function Home({ handleClick }) {
  const onFinish = (e) => {
    handleClick();
  };
  return (
    <>
      <div className="Home">
        <div className="form">
          <Form name="complex-form" onFinish={onFinish}>
            <Title className="homeTitle" level={1}>
              Welcome Back
            </Title>
            <Title className="homeSubtitle" level={5}>
              Sub-title text goes here{" "}
            </Title>

            <Form.Item>
              <Space size="">
                <Form.Item
                  name="email"
                  noStyle
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input
                    type="email"
                    style={{ width: 300 }}
                    placeholder="Email Address *"
                    autoComplete="off"
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item>
              <Space>
                <Form.Item
                  name="password"
                  noStyle
                  rules={[{ required: true, message: "password is required" }]}
                >
                  <Input
                    autoComplete="Mname@1234"
                    type="password"
                    style={{ width: 300 }}
                    placeholder="Password *"
                  />
                </Form.Item>
              </Space>
            </Form.Item>

            <Button
              className="login-form-button"
              htmlType="submit"
              style={{
                width: 300,
                backgroundColor: "var(--first-color)",
                color: "white",
              }}
            >
              Login
            </Button>

            <Form.Item>
              <Checkbox className="homeCheckbox" defaultChecked>
                Remember me
              </Checkbox>
              <a className="login-form-forgot">Forgot password ?</a>
            </Form.Item>
          </Form>
        </div>
        <div className="poster">
          <Image preview={false} src={Poster} />
        </div>
      </div>
    </>
  );
}

export default Home;
